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
      .then(ui.deleteGoalSuccess)
      .catch(ui.failure)
  }
}

const onUpdateGoal = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.updateGoal(formData)
    .then(ui.updateGoalSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('.goal-btn').on('click', onGetGoals)
  $('.create-goal-form').on('submit', onCreateGoal)
  $('.get-goal-form').on('submit', onGetGoal)
  $('.content').on('click', onDeleteGoal)
  $('.update-goal-form').on('submit', onUpdateGoal)
}

module.exports = {
  addHandlers
}
