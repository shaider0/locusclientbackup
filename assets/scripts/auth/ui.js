const store = require('../store')

const signUpSuccess = function (formData) {
  $('form').trigger('reset')
  $('.sign-up-display').text('New account created! Please sign in below.')
}

const signInSuccess = function (formData) {
  store.user = formData.user
  $('form').trigger('reset')
  $('.title').hide()
  $('.tagline').hide()
  $('.go-back').hide()
  $('.show-sign-up').hide()
  $('.show-sign-in').hide()
  $('.sign-up-div').hide()
  $('.sign-in-div').hide()
  $('nav').show()
  $('.main-overlay').prepend($('nav'))
  $('.message-display').text('')
}

const signOutSuccess = function () {
  store.user = null
  $('form').trigger('reset')
  $('nav').hide()
  $('.title').show()
  $('.tagline').show()
  $('.show-sign-up').show()
  $('.show-sign-in').show()
  $('.goal-div').hide()
  $('.message-display').text('')

  // $('.logo').show()
  // $('.logo-overlay').show()
  // $('main').hide()
  // $('.show-sign-up').show()
  // $('.show-sign-in').show()
  // $('.sign-up-display').text('')
  // $('.sign-in-display').text('')
  // $('.change-password-display').text('')
  // $('.sign-out-display').text('')
  // $('.tagline').text('See you later, Sam!')
}

const changePwSuccess = function () {
  $('.message-display').text('Password changed!')

  const clearText = () => {
    $('.message-display').text('')
  }

  setTimeout(clearText, 3000)

  $('.change-password-form-div').hide()
  $('form').trigger('reset')
  $('nav').show()
}

const failure = function () {
  $('.message-display').text('Something went wrong. Please try again.')
  $('form').trigger('reset')
}

module.exports = {
  signInSuccess,
  signUpSuccess,
  changePwSuccess,
  signOutSuccess,
  failure
}
