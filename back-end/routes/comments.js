const express = require('express');
const router = express.Router();
const queries = require('../db/queries/comments')

router.get('/show/:show_id', async (req, res, next) => {
    try {
        let shows = await queries.getCommentByShowId(req.params.show_id)

        res.json({
            shows: shows,
            message: 'all shows retrieved',
            error: false
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            shows: null,
            message: 'you took a wrong turn',
            error: true
        })
    }
});

router.post('/', async (req, res, next) => {
    try {
        let newComment = await queries.addNewComment(req.body)

        res.json({
            comment: newComment,
            message: 'new comment added',
            error: false
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            comment: null,
            message: 'comment could not be added',
            error: true
        })
    }
})

module.exports = router