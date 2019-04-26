const api = require('./api.js')
const ui = require('./ui.js')

const onGetGoals = (event) => {
  event.preventDefault()
  api.getGoals()
    .then(ui.getGoalsSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('.goal-btn').on('click', onGetGoals)
}

module.exports = {
  addHandlers
}
