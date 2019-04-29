'use strict'
const mainEvents = require('./main/events.js')
const authEvents = require('./auth/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  mainEvents.addHandlers()
  authEvents.addHandlers()
  $('nav').hide()
  $('.go-back').hide()
  $('.sign-up-div').hide()
  $('.sign-in-div').hide()
  $('.change-password-button-div').hide()
  $('.change-password-form-div').hide()
  $('.error-display').hide()
  $('.goal-div').hide()
})
