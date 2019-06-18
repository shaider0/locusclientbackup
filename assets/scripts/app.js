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
  $('.update-goal-div').hide()
  $('.create-goal-div').hide()
  $('.get-goal-div').hide()
  $('.change-password-form').hide()
  $('.time').hide()
}

$(() => {
  mainEvents.addHandlers()
  authEvents.addHandlers()
  loggedOut()

  const setTime = () => {
    const dateWithoutSecond = new Date()
    const time = dateWithoutSecond.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
    document.querySelector('.time').innerHTML = time
  }
  setTime()
  window.setInterval(setTime, 1000)
})

module.exports = {
  loggedOut
}
