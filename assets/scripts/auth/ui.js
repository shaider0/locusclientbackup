const store = require('../store')

const signUpSuccess = function (formData) {
  $('form').trigger('reset')
  $('.sign-up-display').text('New account created! Please sign in below.')
}

const signUpFailure = function (formData) {
  $('form').trigger('reset')
  $('.sign-up-display').text('Something went wrong. Please try again.')
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
  $('.welcome-message').show()
  $('.main-overlay').append($('.welcome-message'))
}

const signOutSuccess = function () {
  store.user = null
  $('form').trigger('reset')
  $('nav').hide()
  $('.welcome-message').hide()
  $('.title').show()
  $('.tagline').show()
  $('.show-sign-up').show()
  $('.show-sign-in').show()
  $('.goal-div').hide()

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

const signInFailure = function (formData) {
  $('form').trigger('reset')
  $('.sign-in-display').text('Please try again')
}

const showChangePasswordForm = function () {
  $('.change-password-form-div').show()
}

const changePwSuccess = function () {
  $('.change-password-display').text('Password changed!')
  $('.change-password-form-div').hide()
  $('form').trigger('reset')
  setTimeout(function () {
    $('.change-password-display').text('')
  }, 2000
  )
}

const changePwFailure = function () {
  $('.change-password-display').text('Something went wrong. Please try again.')
  $('form').trigger('reset')
}

const signOutFailure = function () {
  $('.sign-out-display').text('Please try again later')
}

module.exports = {
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
  showChangePasswordForm,
  changePwSuccess,
  changePwFailure,
  signOutSuccess,
  signOutFailure
}
