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
  $('.sign-up-sign-in-div').hide()
  $('.change-password-button-div').show()
  $('.change-password-form-div').hide()
  $('.sign-out-div').show()
}

const signInFailure = function (formData) {
  $('.sign-in-display').text('Please try again')
  $('form').trigger('reset')
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

const signOutSuccess = function () {
  store.user = null
  $('form').trigger('reset')
  $('.sign-up-sign-in-div').show()
  $('.change-password-button-div').hide()
  $('.change-password-form-div').hide()
  $('.sign-out-div').hide()

  $('.sign-up-display').text('')
  $('.sign-in-display').text('')
  $('.change-password-display').text('')
  $('.sign-out-display').text('')
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
