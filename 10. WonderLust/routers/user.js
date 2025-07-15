const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync.js')
const passport = require('passport')
const {redirectUrlSave} = require('../middleware.js')
const userConstroller = require('../controllers/users.js')


router.route('/signup')
.get(userConstroller.signForm)
.post(wrapAsync(userConstroller.signUp))


router.route('/login')
.get(userConstroller.logInForm)
.post(redirectUrlSave, passport.authenticate('local', {
    failureRedirect: '/login',
    failureflah: true,
}), wrapAsync(userConstroller.logIn))


router.get('/logout', userConstroller.logOut)


module.exports = router