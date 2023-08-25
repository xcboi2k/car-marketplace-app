export const sendToken = (res, user, statusCode, message) => {
    const token = user.getJWTToken();
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
    res.status(statusCode).cookie("token", token, options).json({success: true, message, user: userData})
}