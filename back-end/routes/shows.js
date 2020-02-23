const express = require('express');
const router = express.Router();
const queries = require('../db/queries/shows')
const { loginRequired } = require('../auth/helpers')

router.get('/', loginRequired, async (req, res, next) => {
    try {
        let shows = await queries.getAllShows()

        res.json({
            payload: shows,
            message: 'all shows retrieved',
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

router.get('/:id', loginRequired, async (req, res, next) => {
    try {
        let byId = await queries.getShowsById(req.params.id)

        res.json({
            payload: byId,
            message: 'show retrieved',
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
})

router.get('/genre/:genre_id', loginRequired, async (req, res, next) => {
    try {
        let byGenreId = await queries.getShowsByGenreId(req.params.genre_id)

        res.json({
            payload: byGenreId,
            message: 'show retrieved',
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
})

router.get('/user/:user_id', loginRequired, async (req, res, next) => {
    try {
        let byUserId = await queries.getShowsByUserId(req.params.user_id)

        res.json({
            payload: byUserId,
            message: 'show retrieved',
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
})

router.post('/', loginRequired, async (req, res, next) => {
    try {
        let newShow = await queries.addNewShow(req.body)
        console.log('new', newShow);

        res.json({
            payload: newShow,
            message: 'new series added',
            error: false
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            payload: null,
            message: 'series could not be added',
            error: true
        })
    }
})

router.post('/new_watcher', loginRequired, async (req, res, next) => {
    try {
        let newShow = await queries.addNewShowWatcher(req.body)
        console.log('new', newShow);

        res.json({
            payload: newShow,
            message: `new watcher added`,
            error: false
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            payload: null,
            message: 'you can\'t perform this operation',
            error: true
        })
    }
})


module.exports = router