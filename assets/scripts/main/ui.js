'use strict'

const showGoalsTemplate = require('../templates/goal-listing.handlebars')
const showGoalTemplate = require('../templates/goal-listing-single.handlebars')

const getGoalsSuccess = (data) => {
  const showGoalsHtml = showGoalsTemplate({ goals: data.goals })
  $('.content').html(showGoalsHtml)
  $('.main-overlay').append($('.goal-div'))
  $('.goal-div').show()
}

const createGoalSuccess = () => {
  console.log('goal created')
}

const getGoalSuccess = (data) => {
  $('.welcome-message').hide()
  const showGoalHtml = showGoalTemplate({ goal: data.goal })
  $('.content').html(showGoalHtml)
}

const deleteGoalSuccess = () => {
  console.log('goal deleted')
}

const updateGoalSuccess = () => {
  console.log('goal updated')
}

const failure = () => {
  $('.error-display').text('something went wrong. please try again')
}

module.exports = {
  getGoalsSuccess,
  failure,
  createGoalSuccess,
  getGoalSuccess,
  deleteGoalSuccess,
  updateGoalSuccess
}
