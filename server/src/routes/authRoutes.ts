import express from 'express';
import { userRegister, userLogin, userLogout, sendOtpForRegister, verifyOtp } from '../controllers/auth/authController';
import tryCatch from '../lib/utils/tryCatch';

const authRouter = express.Router();

authRouter
.get("/register/:email", tryCatch(sendOtpForRegister))
.post("/verify-otp", tryCatch(verifyOtp)) 
.post('/register', tryCatch(userRegister))
.post('/login', tryCatch(userLogin))
.post('/logout', tryCatch(userLogout))
export default authRouter