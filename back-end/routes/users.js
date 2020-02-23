const express = require('express');
const router = express.Router();
const queries = require('../db/queries/users')
const { loginRequired } = require('../auth/helpers')

/* GET users listing. */
router.get('/', loginRequired, async (req, res, next) => {
  try {
    let users = await queries.getAllUsers()

    res.json({
      payload: users,
      message: 'all users retrieved',
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
    let byId = await queries.getUsersById(req.params.id)

    res.json({
      payload: byId,
      message: 'user retrieved',
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


// router.post('/', async (req, res, next) => {
//   console.log(req.body);
//   try {
//     let newUser = await queries.addNewUser(req.body)

//     res.json({
//       payload: newUser,
//       message: 'a new user added',
//       error: false
//     })
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({
//       payload: null,
//       message: 'user could not be added',
//       error: true
//     })
//   }
// })


module.exports = router;
