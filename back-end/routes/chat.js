const express = require('express');
const router = express.Router();
const queries = require('../db/queries/chat')
// const { loginRequired } = require('../auth/helpers')

router.get('/', async (req, res, next) => {
    try {
        let chat = await queries.getMessagesByChatId()

        res.json({
            payload: chat,
            message: 'all chat retrieved',
            error: false
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            payload: null,
            message: 'you took a wrong turn',
            error: true
        })
    }
});

module.exports = router