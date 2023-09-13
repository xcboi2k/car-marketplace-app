const User = require('../models/UserModel')
const jwt = require('jsonwebtoken')
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadToCloudinary = (path, folder) => {
    return cloudinary.uploader.upload(path, { folder })
    .then((data) => {
        return { url: data.url, public_id: data.public_id };
    }).catch((error) => {
        console.log(error);
    })
}

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
    const {userName, email, password} = req.body;
    try {
        const user = await User.signup(
            userName, 
            email, 
            password,
        )
        console.log('backend:', user._id);
        const token = createToken(user._id);
        res.status(200).json({user, token, message: "Account created successfully."})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success: false, message: error.message});
    }
}

// const uploadUserImage = async(req, res) => {
//     try{
//         const cloudinaryRes = await uploadToCloudinary(req.file.path, "nipponAuto-user-images");
//         console.log(cloudinaryRes);
//         const savedImage = await User.updateOne({_id: req.params.id},
//             {
//                 $set: {
//                     profile_photo_url: cloudinaryRes.url,
//                     profile_photo_publicId: cloudinaryRes.public_id,
//                 },
//             }
//         );
        
//         res.status(200).send("user image uploaded with success!");
//     }
//     catch(error){       
//         res.status(400).send(error);
//     }
    
// }

module.exports = { signUpUser, loginUser, uploadUserImage }