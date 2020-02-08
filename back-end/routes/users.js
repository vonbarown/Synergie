const express = require('express');
const router = express.Router();
const queries = require('../db/queries/users')

/* GET users listing. */
router.get('/', async function (req, res, next) {
  try {
    let users = await queries.getAllUsers()

    res.json({
      users: users,
      message: 'all users retrieved',
      error: false
    })
  } catch (error) {
    res.status(500).json({
      users: null,
      message: 'you took a wrong turn',
      error: true
    })
  }
});

module.exports = router;
