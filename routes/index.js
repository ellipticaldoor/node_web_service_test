var express = require('express')
var router = express.Router()

var queries = require('../db/queries')

// GET all shows
router.get('/messages', function (req, res, next) {
  queries.getAll()
  .then(function (messages) {
    res.status(200).json(messages)
  })
  .catch(function (error) {
    next(error)
  })
})

router.get('/messages/:id', function (req, res, next) {
  queries.getSingle(req.params.id)
  .then(function (message) {
    res.status(200).json(message)
  })
  .catch(function (error) {
    next(error)
  })
})

module.exports = router
