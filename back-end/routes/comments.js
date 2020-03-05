const express = require('express');
const router = express.Router();
const queries = require('../db/queries/comments')
const { loginRequired } = require('../auth/helpers')


router.get('/show/:show_id', loginRequired, async (req, res, next) => {
    try {
        let comments = await queries.getCommentByShowId(req.params.show_id)

        res.json({
            payload: comments,
            message: 'all comments retrieved',
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

router.post('/', loginRequired, async (req, res, next) => {
    try {
        let newComment = await queries.addNewComment(req.body)

        res.json({
            payload: newComment,
            message: 'new comment added',
            error: false
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            payload: null,
            message: 'comment could not be added',
            error: true
        })
    }
})

router.patch('/:id', loginRequired, async (req, res, next) => {

    try {
        let updatedComment = await queries.updateComment(req.body.comment_body, req.params.id)
        res.json({
            payload: updatedComment,
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

router.delete('/:id/user/:user_id/delete', async (req, res, next) => {

    try {
        let deletedComment = await queries.deleteComment(req.params.id, req.params.user_id)
        res.json({
            payload: deletedComment,
            message: 'Comment successful deleted',
            error: false
        })
    } catch (error) {
        console.log("error", error)
        res.status(500).json({
            payload: null,
            msg: `You can't perform this operation`,
            error: true
        })
    }
})

module.exports = router