const express = require('express');
const router = express.Router();
const queries = require('../db/queries/shows')

router.get('/', async (req, res, next) => {
    try {
        let shows = await queries.getAllShows()

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

router.get('/:id', async (req, res, next) => {
    try {
        let byId = await queries.getShowsById(req.params.id)

        res.json({
            shows: byId,
            message: 'show retrieved',
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
})

router.get('/genre/:genre_id', async (req, res, next) => {
    try {
        let byGenreId = await queries.getShowsByGenreId(req.params.genre_id)

        res.json({
            shows: byGenreId,
            message: 'show retrieved',
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
})

router.get('/user/:user_id', async (req, res, next) => {
    try {
        let byUserId = await queries.getShowsByUserId(req.params.user_id)

        res.json({
            shows: byUserId,
            message: 'show retrieved',
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
})

router.post('/', async (req, res, next) => {
    console.log(req.body);
    try {
        let newShow = await queries.addNewShow(req.body)

        res.json({
            shows: newShow,
            message: 'new series added',
            error: false
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            shows: null,
            message: 'series could not be added',
            error: true
        })
    }
})


module.exports = router