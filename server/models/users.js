import mongoose from "mongoose";
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        // required: true
    },
    email:{
        type: String,
        // required: true,
        unique: true,
    },
    password:{
        type: String,
        // required: true,
        minLength: [6, 'Password must be 6 characters long.'],
        select: false,
    },
    profile_photo:{
        public_id: String,
        url: String,
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    verified: {
        type: Boolean,
        default: false,
    },
    otp: Number,
    otp_expiry: Date,

    listings:{
        car_photo:{
            public_id: String,
            url: String,
        },
        price: "Number",
        car_model: "String",
        production_year: "Number",
        transmission_type: "String",
        total_kms: "Number",
        description: "String",
        features: "String",
        vehicle_information: "String",
        location: "String",
        createdAt: Date,
    }
})

// userSchema.methods.getJWTToken = function () {
//     return jwt.sign({_id: this._id}, process.env.JWT_SECRET, {
//         expiresIn: process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000,
//     });
// };

export const User = mongoose.model("User", userSchema);