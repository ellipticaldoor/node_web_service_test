process.env.NODE_ENV = 'test'

var chai = require('chai')
var chaiHttp = require('chai-http')
var server = require('../app')
var knex = require('../db/knex')

chai.use(chaiHttp)
chai.should()

describe('API Routes', function () {
  beforeEach(function (done) {
    knex.migrate.rollback()
    .then(function () {
      knex.migrate.latest()
      .then(function () {
        return knex.seed.run()
        .then(function () {
          done()
        })
      })
    })
  })

  afterEach(function (done) {
    knex.migrate.rollback()
    .then(function () {
      done()
    })
  })

  describe('GET /api/v1/messages', function () {
    it('should return all messages', function (done) {
      chai.request(server)
      .get('/api/v1/messages')
      .end(function (err, res) {
        res.should.have.status(200)
        res.should.be.json
        res.body.should.be.a('array')
        res.body.length.should.equal(4)
        res.body[0].should.have.property('message')
        res.body[0].message.should.equal('this is a message')
        done()
        if (err) { console.log(err) }
      })
    })
  })

  describe('GET /api/v1/messages/:id', function () {
    it('should return a single show', function (done) {
      chai.request(server)
      .get('/api/v1/messages/1')
      .end(function (err, res) {
        res.should.have.status(200)
        res.should.be.json
        res.body.should.be.a('object')
        res.body.should.have.property('message')
        res.body.name.should.equal('this is a message')
        done()
        if (err) { console.log(err) }
      })
    })
  })
})
