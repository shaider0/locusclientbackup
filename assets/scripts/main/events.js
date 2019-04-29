const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../../lib/get-form-fields.js')

const onGetGoals = () => {
  api.getGoals()
    .then(ui.getGoalsSuccess)
    .catch(ui.failure)
}

const onCreateGoal = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  console.log('form data: ', formData)
  api.createGoal(formData)
    .then(onGetGoals)
    .catch(ui.failure)
}

const onGetGoal = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.getGoal(formData)
    .then(ui.getGoalSuccess)
    .catch(ui.failure)
}

const onDeleteGoal = (event) => {
  event.preventDefault()
  if (event.target.matches('.delete-goal')) {
    const id = $(event.target).data('id')
    api.deleteGoal(id)
      .then(onGetGoals)
      .catch(ui.failure)
  }
}

const onUpdateGoal = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.updateGoal(formData)
    .then(onGetGoals)
    .catch(ui.failure)
}

const onShowSignUp = () => {
  const signUp = $('.sign-up-div')
  signUp.show()
  $('.go-back').show()
  $('.sign-in-div').hide()
  $('.title').hide()
  $('.tagline').hide()
  $('.main-overlay').prepend(signUp)
}

const onShowSignIn = () => {
  const signIn = $('.sign-in-div')
  signIn.show()
  $('.go-back').show()
  $('.sign-up-div').hide()
  $('.title').hide()
  $('.tagline').hide()
  $('.main-overlay').prepend(signIn)
}

const onSettings = () => {
  const changePwForm = $('.change-password-form-div')
  changePwForm.show()
  $('nav').hide()
  $('.main-overlay').prepend(changePwForm)
}

const onGoBack = () => {
  $('.logo').show()
  $('.logo-overlay').show()
  $('.title').show()
  $('.tagline').show()
  $('.sign-in-div').hide()
  $('.sign-up-div').hide()
  $('.go-back').hide()
}

const addHandlers = () => {
  $('.get-goals').on('click', onGetGoals)
  $('.settings').on('click', onSettings)
  $('.create-goal-form').on('submit', onCreateGoal)
  $('.get-goal-form').on('submit', onGetGoal)
  $('.content').on('click', onDeleteGoal)
  $('.update-goal-form').on('submit', onUpdateGoal)
  $('.show-sign-up').on('click', onShowSignUp)
  $('.show-sign-in').on('click', onShowSignIn)
  $('.go-back').on('click', onGoBack)
}

module.exports = {
  addHandlers
}
