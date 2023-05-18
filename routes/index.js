const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const todos = require('./modules/todos')
const users = require('./modules/users')
// const auth = require('./modules/auth')
// const { authenticator } = require('../middleware/auth')

// router.use('/todos', authenticator, todos)
router.use('/todos', todos)
// router.use('/auth', auth)
router.use('/users', users)
// router.use('/', authenticator, home)
router.use('/', home)

module.exports = router