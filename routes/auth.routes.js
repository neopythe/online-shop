const express = require('express')

const { getSignup, getLogin } = require('../controllers/auth.controller')

const router = express.Router()

router.get('/signup', getSignup)

router.get('/login', getLogin)

module.exports = router
