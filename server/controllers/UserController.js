const User = require('../models/UserModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000,});
}

const loginUser = async(req, res) => {
    const {loginEmail, loginPassword} = req.body;
    try {
        const user = await User.login(loginEmail, loginPassword)

        const { _id, userName, email, password} = user;

        const token = createToken(user._id);
        res.status(200).json({user: {
            _id,
            userName,
            email, 
            password,
        }, token, message: "Login successfully."})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success: false, message: error.message});
    }
}

const signUpUser = async(req,res) => {
    const {userName, email, password} = req.body;
    try {
        // const {profile_photo} = req.files;
        const user = await User.signup(userName, email, password)
        const token = createToken(user._id);
        res.status(200).json({user, token, message: "Account created successfully."})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success: false, message: error.message});
    }
}


module.exports = { signUpUser, loginUser }