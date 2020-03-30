const store = require('../store')
const api = require('./api')

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
  $('.goal-forms').hide()
  $('.task-forms').hide()
  $('.update-task-form').hide()
  $('.update-task-id').hide()
  $('.date').hide()
  $('.time').hide()
  $('.weather').hide()
  $('.site-title').show()
  $('.tagline').show()
  $('.show-sign-up').show()
  $('.show-sign-in').show()
}

const home = () => {
  $('.site-title').hide()
  $('.tagline').hide()
  $('.go-back').hide()
  $('.show-sign-up').hide()
  $('.show-sign-in').hide()
  $('.sign-up-form').hide()
  $('.sign-in-form').hide()
  $('.navi').show()
  $('.welcome-message').show()
  $('.content').hide()
  $('.message-display').text('')
  $('.date').show()
  $('.time').show()
  $('.weather').show()
}

const signUpSuccess = function () {
  $('form').trigger('reset')
  $('.sign-up-form').hide()
  $('.message-display').text('New account created!')
}

const storeUser = function (object) {
  store.user = object.user
}

const signInSuccess = function () {
  $('form').trigger('reset')
  home()
  $('.background').css('background-image', 'url("https://images.unsplash.com/photo-1555985202-12975b0235dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2549&q=80")')
}

const signOutSuccess = function () {
  store.user = null
  $('form').trigger('reset')
  loggedOut()
  $('.background').css('background-image', 'url("https://images.unsplash.com/photo-1528818955841-a7f1425131b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80")')
}

const changePwSuccess = function () {
  $('.message-display').text('Password changed!')

  const clearText = () => {
    $('.message-display').text('')
  }

  setTimeout(clearText, 3000)
  $('.date').show()
  $('.time').show()
  $('.weather').show()

  const hide = () => {
    $('.change-password-form').hide()
  }
  setTimeout(hide, 3000)

  $('form').trigger('reset')

  const show = () => {
    $('nav').show()
    $('.welcome-message').show()
    $('.time').show()
  }
  setTimeout(show, 3000)
}

const failure = function () {
  $('form').trigger('reset')
  $('.message-display').text('Something went wrong. Please try again.')

  const clearError = () => {
    $('.message-display').text('')
  }
  setTimeout(clearError, 3000)
}

module.exports = {
  signInSuccess,
  signUpSuccess,
  changePwSuccess,
  signOutSuccess,
  failure,
  loggedOut,
  storeUser,
  home
}
