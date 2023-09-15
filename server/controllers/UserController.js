const User = require('../models/UserModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000,});
}

const loginUser = async(req, res) => {
    const {loginEmail, loginPassword} = req.body;
    try {
        const user = await User.login(loginEmail, loginPassword)

        const { _id, userName, email, password, profile_photo} = user;

        const token = createToken(user._id);
        res.status(200).json({user: {
            _id,
            firstName,
            lastName,
            userName,
            email, 
            password,
            profile_photo, 
            profile_photo_ref,
            shop_name, 
            location, 
            phone_number, 
            bio, 
            about,
        }, token, message: "Login successfully."})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success: false, message: error.message});
    }
}

const signUpUser = async(req,res) => {
    const {userName, email, password, profile_photo, profile_photo_ref} = req.body;
    try {
        const user = await User.signup(
            firstName,
            lastName,
            userName, 
            email, 
            password,
            profile_photo, 
            profile_photo_ref,
        )
        console.log('backend:', user._id);
        const token = createToken(user._id);
        res.status(200).json({user, token, message: "Account created successfully."})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success: false, message: error.message});
    }
}

const otherInfoUser = async(req,res) => {
    const {shop_name, location, phone_number, bio, about, id} = req.body;
    try {
        const user = await User.otherinfo(
            shop_name, location, phone_number, bio, about, id
        )
        console.log('backend:', user._id);
        const token = createToken(user._id);
        res.status(200).json({user: {
            _id,
            firstName,
            lastName,
            userName,
            email, 
            password,
            profile_photo, 
            profile_photo_ref,
            shop_name, 
            location, 
            phone_number, 
            bio, 
            about,
        }, token, message: "Added information successfully."})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success: false, message: error.message});
    }
}

module.exports = { signUpUser, loginUser, otherInfoUser }