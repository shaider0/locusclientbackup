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

const onUpdateGoal = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.updateGoal(formData)
    .then(onGetGoals)
    .catch(ui.failure)
}

const onGetTasks = () => {
  api.getTasks()
    .then(ui.getTasksSuccess)
    .catch(ui.failure)
}

const onCreateTask = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.createTask(formData)
    .then(onGetTasks)
    .catch(ui.failure)
}

const onGetTask = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.getTask(formData)
    .then(ui.getTaskSuccess)
    .catch(ui.failure)
}

const onUpdateTask = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.updateGoal(formData)
    .then(onGetTasks)
    .catch(ui.failure)
}

const onDelete = (event) => {
  event.preventDefault()
  if (event.target.matches('.delete-goal')) {
    const id = $(event.target).data('id')
    api.deleteGoal(id)
      .then(onGetGoals)
      .catch(ui.failure)
  } else if (event.target.matches('.delete-task')) {
    const id = $(event.target).data('id')
    api.deleteTask(id)
      .then(onGetTasks)
      .catch(ui.failure)
  }
}

const onShowSignUp = () => {
  const signUp = $('.sign-up-form')
  signUp.show()
  $('.go-back').show()
  $('.sign-in-form').hide()
  $('.title').hide()
  $('.tagline').hide()
  $('.overlay').prepend(signUp)
  $('.message-display').text('')
}

const onShowSignIn = () => {
  const signIn = $('.sign-in-form')
  signIn.show()
  $('.go-back').show()
  $('.sign-up-form').hide()
  $('.title').hide()
  $('.tagline').hide()
  $('.overlay').prepend(signIn)
  $('.message-display').text('')
}

const onSettings = () => {
  $('.welcome-message').hide()
  $('nav').hide()
  $('.goal-forms').hide()
  $('.task-forms').hide()
  $('.content').hide()
  const changePwForm = $('.change-password-form')
  changePwForm.show()
  $('.overlay').prepend(changePwForm)
}

const onCancel = () => {
  const changePwForm = $('.change-password-form')
  changePwForm.hide()
  $('nav').show()
  $('.welcome-message').show()
}

const onGoBack = () => {
  $('.logo').show()
  $('.logo-overlay').show()
  $('.title').show()
  $('.tagline').show()
  $('.sign-in-form').hide()
  $('.sign-up-form').hide()
  $('.go-back').hide()
}

const onLogo = () => {
  $('form').trigger('reset')
  $('.goal-forms').hide()
  $('.task-forms').hide()
  $('.content').hide()
  $('.welcome-message').show()
}

const addHandlers = () => {
  $('.get-goals').on('click', onGetGoals)
  $('.settings').on('click', onSettings)
  $('.create-goal-form').on('submit', onCreateGoal)
  $('.get-goal-form').on('submit', onGetGoal)
  $('.content').on('click', onDelete)
  $('.update-goal-form').on('submit', onUpdateGoal)
  $('.show-sign-up').on('click', onShowSignUp)
  $('.show-sign-in').on('click', onShowSignIn)
  $('.go-back').on('click', onGoBack)
  $('.cancel').on('click', onCancel)
  $('.logo').on('click', onLogo)
  $('.get-tasks').on('click', onGetTasks)
  $('.create-task-form').on('submit', onCreateTask)
  $('.get-task-form').on('submit', onGetTask)
  $('.update-task-form').on('submit', onUpdateTask)
}

module.exports = {
  addHandlers
}
