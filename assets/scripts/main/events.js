const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../../lib/get-form-fields.js')

const onGetGoals = (event) => {
  event.preventDefault()
  api.getGoals()
    .then(ui.getGoalsSuccess)
    .catch(ui.failure)
}

const onCreateGoal = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  console.log('form data: ', formData)
  api.createGoal(formData)
    .then(ui.createGoalSuccess)
    .catch(console.log('something went wrong with create goal'))
}

const onGetGoal = (event) => {
  const formData = getFormFields(event.target)
  event.preventDefault()
  api.getGoal(formData)
    .then(ui.getGoalSuccess)
    .catch(ui.failure)
}

const onDeleteGoal = (event) => {
  const id = $(event.target).data('id')
  api.deleteGoal(id)
    .then(ui.deleteGoalSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('.goal-btn').on('click', onGetGoals)
  $('.create-goal-form').on('submit', onCreateGoal)
  $('.get-goal-form').on('submit', onGetGoal)
  $('.content').on('click', onDeleteGoal)
}

module.exports = {
  addHandlers
}
