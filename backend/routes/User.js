const express = require('express');
const router = express.Router();
const {showLogin, registerUser, loginUser} = require('../controller/User')

router.get('/', showLogin);
router.post('/register', registerUser)
router.post('/login', loginUser)


module.exports = router;