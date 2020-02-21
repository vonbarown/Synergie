const express = require('express');
const router = express.Router();
const queries = require('../db/queries/genre')
const { loginRequired } = require('../auth/helpers')

router.get('/', loginRequired, async (req, res, next) => {
    try {
        let genres = await queries.getAllGenres()

        res.json({
            payload: genres,
            message: 'all genres retrieved',
            error: false
        })
    } catch (error) {
        console.log(error);

        res.status(500).json({
            payload: null,
            message: 'you took a wrong turn',
            error: true
        })
    }
});

router.post('/', loginRequired, async (req, res, next) => {
    try {
        let newGenre = await queries.addGenre(req.body)

        res.json({
            payload: newGenre,
            message: 'new genre added',
            error: false
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            payload: null,
            message: 'you can\'t perform this operation ',
            error: true
        })
    }
})

module.exports = router