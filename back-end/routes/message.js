const express = require('express');
const router = express.Router();
const queries = require('../db/queries/message')
// const { loginRequired } = require('../auth/helpers')

router.post('/', async (req, res, next) => {
    try {
        let newMessage = await queries.addNewMessage(req.body)
        console.log('new', newMessage);

        res.json({
            payload: newMessage,
            message: 'message sent',
            error: false
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            payload: null,
            message: 'you can\'t perform this action',
            error: true
        })
    }
})


module.exports = router