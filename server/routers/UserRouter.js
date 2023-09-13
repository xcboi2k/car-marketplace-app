const express = require('express')
const { loginUser, signUpUser, uploadUserImage } = require('../controllers/UserController')

const router = express.Router();

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signUpUser)
// router.post('/uploadPhoto/', uploadUserImage )
module.exports = router