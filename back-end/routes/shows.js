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

module.exports = router