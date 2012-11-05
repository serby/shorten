var assert = require('assert')

describe('shorten', function() {

  it ('should have encode method', function() {
    var shorten = require('../shorten')()
    assert.equal(typeof shorten.encode, 'function')
  })

  it ('should have decode method', function() {
    var shorten = require('../shorten')()
    assert.equal(typeof shorten.decode, 'function')
  })

  describe('#encode()', function() {
    it ('should encode integer to string', function() {
      var shorten = require('../shorten')()
      assert.strictEqual(shorten.encode(29292), '9H3')
      assert.strictEqual(shorten.encode(3), '4')
      assert.strictEqual(shorten.encode(2), '3')
      assert.strictEqual(shorten.encode(466509392), 'HdYZo')
    })
  })

  describe('#decode()', function() {
    it ('should encode string to integer', function() {
      var shorten = require('../shorten')()
      assert.strictEqual(shorten.decode('2'), 1)
      assert.strictEqual(shorten.decode('c'), 11)
      assert.strictEqual(shorten.decode('b'), 10)
      assert.strictEqual(shorten.decode('a'), 9)
      assert.strictEqual(shorten.decode('9H3'), 29292)
      assert.strictEqual(shorten.decode('Hello'), 466509392)
      assert.strictEqual(shorten.decode('HdYZo'), 466509392)
      assert.notStrictEqual(shorten.decode('Hello'), shorten.decode('hello'))
      assert.strictEqual(shorten.decode('123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'), 5.848896217117865e+98)
    })
  })

  it ('should allow a custom alphabet to be defined', function() {
    var shorten = require('../shorten')({ alphabet: 'qwertyuiopasdfghjklzxcvbnm123456789'})
      , defaultShorten = require('../shorten')()
    assert.strictEqual(shorten.decode('Hello'), -1392187)
    assert.notStrictEqual(shorten.decode('a'), defaultShorten.encode('a'))
    assert.notStrictEqual(shorten.decode('hello'), defaultShorten.encode('hello'))
  })
})