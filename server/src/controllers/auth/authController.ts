import { NextFunction, Request, Response } from "express";
import User from "../../models/userModel";
import {
  loginSchema,
  otpSchema,
  registerSchema,
  verifyOtpSchema,
} from "../../lib/ZodValidations/authZOD";
import bcrypt from "bcryptjs";
import CustomError from "../../lib/utils/CustomError";
import { createAccessToken } from "../../lib/jwt";
import { sendRegisterOtpMail } from "../../lib/sendMail";
import Otp from "../../models/otpModel";
import otpGenerator from 'otp-generator'

export const sendOtpForRegister = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = otpSchema.parse(req.params);

  const emailExists = await User.findOne({ email });
  if (emailExists) {
    return next(new CustomError(400, "User already exists"));
  }

  const otp = otpGenerator.generate(6, {
    digits: true,
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });

  const expiresAt = new Date(Date.now() + 1000 * 60 * 5);

  await Otp.findOneAndDelete({ email });
  await Otp.create({ email, otp, expiresAt });

  await sendRegisterOtpMail(email, otp);

  res.status(200).json({
    status: "success",
    message: "OTP sent successfully",
  });
};

export const verifyOtp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, otp } = verifyOtpSchema.parse(req.body);

  const otpDoc = await Otp.findOne({ email });

  if (!otpDoc) {
    return next(new CustomError(400, "OTP not found"));
  }
  if (otpDoc.verified) {
    return next(new CustomError(400, "OTP already verified"));
  }
  if (otpDoc.expiresAt < new Date()) {
    return next(new CustomError(400, "OTP expired"));
  }
  if (otpDoc.otp !== otp) {
    return next(new CustomError(400, "OTP is incorrect"));
  }

  await otpDoc.updateOne({ verified: true });

  res.status(200).json({
    status: "success",
    message: "OTP verified successfully",
  });
};

const userRegister = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, email, password } = registerSchema.parse(req.body);
  const userNameExists = await User.findOne({ username });
  if (userNameExists) {
    return next(new CustomError(400, "Username already exists"));
  }

  const emailExists = await User.findOne({ email });
  if (emailExists) {
    return next(new CustomError(400, "Email already exists"));
  }

  const otpVerified = await Otp.findOne({ email, verified: true });
  if (!otpVerified) {
    return next(new CustomError(400, "Email not verified"));
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  await User.create({
    username,
    email,
    password: hashedPassword,
  });
  await Otp.findOneAndDelete({ email });
  return res
    .status(201)
    .json({ status: "success", message: "User created successfully" });
};

const userLogin = async (req: Request, res: Response, next: NextFunction) => {
  const { username, email, password } = loginSchema.parse(req.body);

  const user = await User.findOne({ $or: [{ username }, { email }] });
  if (!user) return next(new CustomError(400, "User not found"));

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return next(new CustomError(400, "Invalid password"));

  const token = createAccessToken(
    user._id.toString(),
    process.env.JWT_TOKEN as string
  );

  const currUser = {
    _id: user._id,
    username: user.username,
    email: user.email,
  };
  return res.status(200).json({
    status: "success",
    message: "User logged successfully",
    user: currUser,
    token,
  });
};


const userLogout = async (req: Request, res: Response) => {
  res.json({ message: "Logout successful" });
};

export { userRegister, userLogin, userLogout };