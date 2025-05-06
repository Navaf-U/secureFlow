import nodemailer from "nodemailer";
import CustomError from "../lib/utils/CustomError";
const sendMail = async (email: string, title: string, body: string) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            from: "secureFlow team",
            port: 587,
            secure: false,
            auth: {
                user: process.env.ADMIN_EMAIL,
                pass: process.env.ADMIN_EMAIL_PASSWORD,
            },
        });

        const info = await transporter.sendMail({
            from: "secureFlow team",
            to: email,
            subject: title,
            html: body,
        });
        return info;
    } catch (error) {
        console.log(error)
        throw new CustomError(500, "Error when sending Email");
    }
};

export const sendRegisterOtpMail = async (email: string, otp: string) => {
    await sendMail(
        email,
        "Verify your email",
        `
   <div style="font-family: Arial, sans-serif; text-align: center; background-color: #eff6ff; padding: 20px; border-radius: 8px;">
    <h2 style="color: #1d4ed8;">Welcome to secureFlow!!</h2>
    <p style="color: #1e40af;">Please enter the following OTP to verify your email:</p>
    <h1 style="color: #2563eb; background: #dbeafe; display: inline-block; padding: 10px 20px; border-radius: 8px;">${otp}</h1>
    <p style="color: #1e3a8a;">Expires in 5 minutes</p>
   </div>
        `
    );
};

