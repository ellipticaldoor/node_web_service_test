process.env.NODE_ENV = 'test'

var chai = require('chai')
var chaiHttp = require('chai-http')
var server = require('../app')

chai.use(chaiHttp)
chai.should()

describe('API Routes', function () {
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
})
