const User = require('../models/UserModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000,});
}

const loginUser = async(req, res) => {
    const {loginEmail, loginPassword} = req.body;
    try {
        const user = await User.login(loginEmail, loginPassword)
        console.log(user)
        const token = createToken(user._id);
        res.status(200).json({user, token, message: "Login successfully."})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success: false, message: error.message});
    }
}

const signUpUser = async(req,res) => {
    const {firstName, lastName, userName, email, password, profile_photo, profile_photo_ref} = req.body;
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
        res.status(200).json({user, token, message: "Added information successfully."})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success: false, message: error.message});
    }
}

const updatePhotoUser = async(req,res) => {
    const { id, profile_photo, profile_photo_ref } = req.body;

    try {
        const user = await User.updatePhoto(
            id, profile_photo, profile_photo_ref
        )
        console.log('backend:', user._id);
        const token = createToken(user._id);
        res.status(200).json({user, token, message: "Updated photo successfully."})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success: false, message: error.message});
    }
}

const updateInfoUser = async(req,res) => {
    const { id, firstName, lastName, userName, email, shop_name, location, phone_number, bio, about } = req.body;

    try {
        const user = await User.updateInfo(
            id, firstName, lastName, userName, email, shop_name, location, phone_number, bio, about
        )
        console.log('backend:', user._id);
        const token = createToken(user._id);
        res.status(200).json({user, token, message: "Updated photo successfully."})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success: false, message: error.message});
    }
}

const fetchAllUsers = async(req, res) => {
    try {
        const users = await User.find({})
        console.log(users)
        res.status(200).json({users, message: "Users fetched successfully."})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success: false, message: error.message});
    }
}

module.exports = { signUpUser, loginUser, otherInfoUser, updatePhotoUser, updateInfoUser, fetchAllUsers }