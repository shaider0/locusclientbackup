'use strict'

const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onShowChangePasswordForm = function () {
  ui.showChangePasswordForm()
}

const onChangePasswordForm = function (event) {
  event.preventDefault()

  const formData = getFormFields(event.target)
  api.changePassword(formData)
    .then(ui.changePwSuccess)
    .catch(ui.changePwFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const addHandlers = function () {
  $('.sign-up-form').on('submit', onSignUp)
  $('.sign-in-form').on('submit', onSignIn)
  $('.show-change-password-form').on('click', onShowChangePasswordForm)
  $('.change-password-form-div').on('submit', onChangePasswordForm)
  $('.sign-out').on('submit', onSignOut)
}

module.exports = {
  addHandlers
}
