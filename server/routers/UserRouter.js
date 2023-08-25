const express = require('express')
const { loginUser, signUpUser } = require('../controllers/UserController')

const router = express.Router();

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signUpUser)

module.exports = router