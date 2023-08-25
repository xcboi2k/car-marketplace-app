import jwt from 'jsonwebtoken';
import { sendMail } from "../utils/sendMail.js";
import { User } from "../models/users.js";

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000,});
}

export const signup = async(req,res) => {
    try {
        const {userName, email, password} = req.body;
        // const {profile_photo} = req.files;

        let user = await User.findOne({email});

        if(user){
            return res.status(200).json({success: false, message: "User already exists."});
        }

        const otp = Math.floor(Math.random() * 1000000);

        user = User.create(
            {
                userName, 
                email, 
                password, 
                profile_photo: {
                    public_id: "",
                    url: "",
                }, 
                otp, 
                otp_expiry: new Date(Date.now() + process.env.OTP_EXPIRE * 60 * 1000)
            });
        console.log(email);
        await sendMail(email, "Verify your account.", `Your OTP is ${otp}`);

        const token = createToken(user._id);
        console.log(token);
        const options = {
            httpOnly: true,
            expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 60 * 1000)
        }
        const userData = {
            _id: user._id,
            username: user.userName,
            email: user.email,
            password: user.password,
            profile_photo: user.profile_photo,
            listings: user.listings,
        }
        res.status(201).cookie("token", token, options).json({success: true, message: "OTP sent to your email, please verify your account.", user: userData})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success: false, message: error.message});
    }
}