
require('require-self-ref')
const EventEmitter = require('events')
const Promise = require('bluebird')

module.exports = class mockProducer extends EventEmitter {
  constructor () {
    super()
    this._stopped = false
  }
  emitError () {
    this.emit('error', new Error('mockProducer error'))
  }
  stop () {
    return Promise.resolve()
  }
  sendMessage () {
    return Promise.resolve()
  }
}