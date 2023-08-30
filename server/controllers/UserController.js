const User = require('../models/UserModel')
const jwt = require('jsonwebtoken')
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

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
            userName,
            email, 
            password,
            profile_photo
        }, token, message: "Login successfully."})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success: false, message: error.message});
    }
}

const signUpUser = async(req,res) => {
    try {
        const {userName, email, password, profilePhoto} = req.body;
        console.log('backend:', profilePhoto);
        const cloudinaryRes = await cloudinary.uploader.upload(profilePhoto, {
            folder: 'nipponAutoUserPhotos', // Set your desired folder
            resource_type: 'auto',
            public_id: userName + '/' + profilePhoto, // Set the public_id to the image name
            overwrite: true,
        });
        const profile_photo = cloudinaryRes.secure_url;
        const user = await User.signup(
            userName, 
            email, 
            password,
            profile_photo,
        )
        console.log('backend:', user._id);
        const token = createToken(user._id);
        res.status(200).json({user, token, message: "Account created successfully."})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success: false, message: error.message});
    }
}


module.exports = { signUpUser, loginUser }