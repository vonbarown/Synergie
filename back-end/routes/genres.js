const express = require('express');
const router = express.Router();
const queries = require('../db/queries/genre')

router.get('/', async (req, res, next) => {
    try {
        let genres = await queries.getAllGenres()

        res.json({
            genres: genres,
            message: 'all genres retrieved',
            error: false
        })
    } catch (error) {
        console.log(error);

        res.status(500).json({
            genres: null,
            message: 'you took a wrong turn',
            error: true
        })
    }
});

router.post('/', async (req, res, next) => {
    try {
        let newGenre = await queries.addGenre(req.body)

        res.json({
            genre: newGenre,
            message: 'new genre added',
            error: false
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            users: null,
            message: 'you can\'t perform this operation ',
            error: true
        })
    }
})

module.exports = router