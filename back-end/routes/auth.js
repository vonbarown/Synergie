const express = require('express');
const router = express.Router();
const authHelpers = require('../auth/helpers')
const userQueries = require('../db/queries/users')
const passport = require('../auth/passport')

router.post('/signup', async (req, res, next) => {
    const passwordDigest = await authHelpers.hashPassword(req.body.password)

    const userInfo = {
        username: req.body.username,
        avatar_url: req.body.avatar_url,
        password: passwordDigest
    }

    try {
        let newUser = await userQueries.addNewUser(userInfo)
        res.json({
            payload: newUser,
            message: 'Registration successful',
            error: false
        })
    } catch (error) {
        console.log("error", error)
        res.status(500).json({
            payload: null,
            msg: 'Failed to add new user',
            error: true
        })
    }
})

router.post('/login', passport.authenticate('local'), async (req, res, next) => {
    console.log('login', req.body);
    res.json({
        payload: req.user,
        msg: 'user successfully logged in',
        err: false
    })
})

router.get('/isUserLoggedIn', authHelpers.loginRequired, (req, res) => {
    console.log('session', req.user);

    res.json({
        payload: req.user,
        msg: 'User is logged in'
    })
})

router.get('/logout', authHelpers.loginRequired, (req, res, next) => {
    req.logOut()
    res.json({
        payload: null,
        msg: 'user successfully logged out',
        err: false
    })
})

router.patch('/:id', async (req, res, next) => {
    const passwordDigest = await authHelpers.hashPassword(req.body.password)

    const userUpdateInfo = {
        username: req.body.username,
        avatar_url: req.body.avatar_url,
        password: passwordDigest
    }

    try {
        let updatedUser = await userQueries.addNewUser(userUpdateInfo, req.params.id)
        res.json({
            payload: updatedUser,
            message: 'update successful',
            error: false
        })
    } catch (error) {
        console.log("error", error)
        res.status(500).json({
            payload: null,
            msg: 'Failed to add update profile',
            error: true
        })
    }


})

module.exports = router;