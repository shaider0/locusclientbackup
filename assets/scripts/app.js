'use strict'
const mainEvents = require('./main/events.js')
const authEvents = require('./auth/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const loggedOut = () => {
  $('.go-back').hide()
  $('.sign-up-form').hide()
  $('.sign-in-form').hide()
  $('.navi').hide()
  $('.welcome-message').hide()
  $('.content').hide()
  $('.goal-forms').hide()
  $('.task-forms').hide()
  $('.change-password-form').hide()
}

$(() => {
  mainEvents.addHandlers()
  authEvents.addHandlers()
  loggedOut()
})

module.exports = {
  loggedOut
}
