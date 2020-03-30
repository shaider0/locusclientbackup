'use strict'
const mainEvents = require('./main/events.js')
const authEvents = require('./auth/events.js')
const authUi = require('./auth/ui.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  mainEvents.addHandlers()
  authEvents.addHandlers()
  authUi.loggedOut()

  const setTime = () => {
    const dateWithoutSecond = new Date()
    const time = dateWithoutSecond.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
    document.querySelector('.time').innerHTML = time
  }
  setTime()
  window.setInterval(setTime, 1000)

  const setDate = () => {
    const date = new Date()
    const dayOfMonth = date.getDate()
    const day = date.getDay()
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
      'Friday', 'Saturday']
    const month = date.getMonth()
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const year = date.getFullYear()
    const displayDate = `${days[day]}, ${months[month]} ${dayOfMonth}, ${year}`
    document.querySelector('.date').innerHTML = displayDate
  }

  setDate()
  window.setInterval(setDate, 1000)
})
