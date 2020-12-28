const express = require('express')
const router = express.Router()

const usersController  = require('../controllers/users.controller')

router.use('/', function(req, res, next) {
  // console.log("A new users request received at: " + new Date())
  console.log('Start')
  next()
})

router.get('/', usersController.getUsers)

router.get('/:id([0-5]{5})/:name', usersController.getUser)

router.post('/', usersController.addUser)

router.put('/:id', usersController.updateUser)

router.delete('/:id', usersController.deleteUser)

router.use('/', function(req, res, next) {
  console.log('End')
})


module.exports = router