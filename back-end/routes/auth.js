const express = require('express');
const router = express.Router();
const authHelpers = require('../auth/helpers')
const userQueries = require('../db/queries/users')
const passport = require('../auth/passport')
const uuidv4 = require('uuid')

router.post('/signup', async (req, res, next) => {
    const passwordDigest = await authHelpers.hashPassword(req.body.password)
    const user_id = uuidv4('pam')

    const userInfo = {
        username: req.body.username,
        avatar_url: req.body.avatar_url,
        password: passwordDigest,
        user_id: user_id
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

router.patch('/:id', authHelpers.loginRequired, async (req, res, next) => {
    // const passwordDigest = await authHelpers.hashPassword(req.body.password)

    const userInfo = {
        username: req.body.username,
        avatar_url: req.body.avatar_url,
        // password: passwordDigest
    }

    try {
        let updatedUser = await userQueries.updateUserInfo(userInfo, req.params.id)
        res.json({
            payload: updatedUser,
            message: 'Update successful',
            error: false
        })
    } catch (error) {
        console.log("error", error)
        res.status(500).json({
            payload: null,
            msg: 'Failed to add update',
            error: true
        })
    }
})

router.post('/login', passport.authenticate('local'), async (req, res, next) => {
    res.json({
        payload: req.user,
        msg: 'user successfully logged in',
        err: false
    })
})

router.get('/isUserLoggedIn', authHelpers.loginRequired, (req, res) => {
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

module.exports = router;

// const test = () =>{
//     return user_id = uuidv4('pam')
// }

// console.log(test());
