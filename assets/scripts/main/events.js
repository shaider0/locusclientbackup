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

const addHandlers = () => {
  $('.goal-btn').on('click', onGetGoals)
  $('.create-goal-form').on('submit', onCreateGoal)
}

module.exports = {
  addHandlers
}
