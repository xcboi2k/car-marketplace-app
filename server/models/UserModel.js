const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema(
    {
        firstName:{
            type: String,
            required: true
        },
        lastName:{
            type: String,
            required: true
        },
        userName:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true,
            unique: true,
        },
        password:{
            type: String,
            required: true,
            minLength: [6, 'Password must be 6 characters long.'],
        },
        profile_photo:{
            type: String,
        },
        profile_photo_ref:{
            type: String,
        },
    }
)

userSchema.statics.signup = async function(firstName, lastName, userName, email, password, profile_photo, profile_photo_ref) {
    try{
        // validation
        if (!email || !password) {
            throw Error('All fields must be filled')
        }
        if (!validator.isEmail(email)) {
            throw Error('Email not valid')
        }
        // if (!validator.isStrongPassword(password)) {
        //     throw Error('Password not strong enough')
        // }

        const exists = await this.findOne({ email })

        if (exists) {
            throw Error('Email already in use')
        }

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        const user = await this.create({ firstName, lastName, userName, email, password: hash, profile_photo, profile_photo_ref})

        return user
    }
    catch(error){
        console.log(error);
    }
}

userSchema.statics.login = async function(loginEmail, loginPassword) {
    const email = loginEmail;
    const password = loginPassword

    if (!email || !password) {
        throw Error('All fields must be filled')
    }
    const user = await this.findOne({email})
    if (!user) {
        throw Error('Incorrect Email')
    }

    const match = await bcrypt.compare(password, user.password)
        if (!match){
            throw Error('Incorrect Password')
        }

    return user
}

module.exports = mongoose.model('User', userSchema)