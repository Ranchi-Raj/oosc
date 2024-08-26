const express = require('express')
const { createUser, getAllUsers, searchUser} = require('../controllers/userController')
const router = express.Router()

router.route('/').post(createUser)
router.route('/login').post(getAllUsers)
router.route('/search').post(searchUser)

module.exports = router