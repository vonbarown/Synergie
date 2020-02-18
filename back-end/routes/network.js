const express = require('express');
const router = express.Router();
const queries = require('../db/queries/network')
const { loginRequired } = require('../auth/helpers')

router.get('/:id', async (req, res, next) => {
    try {
        let network = await queries.getNetworkByUserId(req.params.id)

        res.json({
            payload: network,
            message: 'network retrieved',
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

router.get('/user/:id', loginRequired, async (req, res, next) => {
    try {
        let chat = await queries.getChatByUserId(req.params.id)

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

router.post('/', loginRequired, async (req, res, next) => {

    try {
        let newNetwork = await queries.addNewNetwork(req.body)
        console.log('new', newNetwork);

        res.json({
            payload: newNetwork,
            message: 'new chat instance created',
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