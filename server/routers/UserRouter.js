const express = require('express')
const { loginUser, signUpUser, otherInfoUser, updatePhotoUser, updateInfoUser, fetchAllUsers } = require('../controllers/UserController')

const router = express.Router();

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signUpUser)
router.post('/otherinfo', otherInfoUser)

//edit user route
router.post('/updatePhoto', updatePhotoUser)
router.post('/updateInfo', updateInfoUser)

router.get('/fetchAllUsers', fetchAllUsers)
module.exports = router