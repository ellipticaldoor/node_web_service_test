var express = require('express')
var router = express.Router()

var queries = require('../db/queries')

// GET all messages
router.get('/messages', function (req, res, next) {
  queries.getAll()
  .then(function (messages) {
    res.status(200).json(messages)
  })
  .catch(function (error) {
    next(error)
  })
})

// GET a message by id
router.get('/messages/:id', function (req, res, next) {
  queries.getMessage(req.params.id)
  .then(function (message) {
    res.status(200).json(message)
  })
  .catch(function (error) {
    next(error)
  })
})

// POST message
router.post('/messages', function (req, res, next) {
  queries.addMessage(req.body)
  .then(function (messageID) {
    return queries.getMessage(messageID)
  })
  .then(function (message) {
    res.status(200).json(message)
  })
  .catch(function (error) {
    next(error)
  })
})

module.exports = router
