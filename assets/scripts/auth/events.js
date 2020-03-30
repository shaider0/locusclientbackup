'use strict'

const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
const eventsMain = require('../main/events.js')

const onSignUp = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.signUp(formData)
    .then(ui.signUpSuccess)
    .then(function () {
      return api.signIn(formData)
    })
    .then(ui.storeUser)
    .then(setTimeout(ui.signInSuccess, 3000))
    .catch(ui.failure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.signIn(formData)
    .then(ui.storeUser)
    .then(ui.signInSuccess)
    .catch(ui.failure)
}

// delete this
const onLogin = function () {
  const formData = {
    'credentials': {
      'email': 's@s',
      'password': 's'
    }
  }
  api.signIn(formData)
    .then(ui.storeUser)
    .then(ui.signInSuccess)
    .catch(ui.failure)
}

const onShowChangePasswordForm = function () {
  ui.showChangePasswordForm()
}

const onChangePasswordForm = function (event) {
  event.preventDefault()

  const formData = getFormFields(event.target)
  api.changePassword(formData)
    .then(ui.changePwSuccess)
    .catch(ui.failure)
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.failure)
}

const addHandlers = function () {
  $('.sign-up-form').on('submit', onSignUp)
  $('.sign-in-form').on('submit', onSignIn)
  $('.show-change-password-form').on('click', onShowChangePasswordForm)
  $('.change-password-form').on('submit', onChangePasswordForm)
  $('.sign-out').on('submit', onSignOut)
  // delete later:
  $('.login-quick').on('click', onLogin)
}

module.exports = {
  addHandlers
}
