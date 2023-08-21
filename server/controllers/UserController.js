import { User } from "../models/users.js"
import { sendMail } from "../utils/sendMail.js";
import { sendToken } from "../utils/sendToken.js";

export const signup = async(req,res) => {
    try {
        const {userName, email, password} = req.body;
        const {profile_photo} = req.files;

        let user = await User.findOne({email});

        if(user){
            return res.status(200).json({success: false, message: "User already exists."});
        }

        const otp = Math.floor(Math.random() * 1000000);

        user = User.create(
            {userName, email, password, profile_photo, otp, 
                otp_expiry: new Date(Date.now() + process.env.OTP_EXPIRE * 60 * 1000)
            });
        
        await sendMail(email, "Verify your account.", `Your OTP is ${otp}`);
        sendToken(res, user, 200, message);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success: false, message: error.message});
    }
}