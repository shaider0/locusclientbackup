'use strict'

const showGoalsTemplate = require('../templates/goal-listing.handlebars')
const showGoalTemplate = require('../templates/goal-listing-single.handlebars')

const getGoalsSuccess = (data) => {
  const showGoalsHtml = showGoalsTemplate({ goals: data.goals })
  $('.content').html(showGoalsHtml)
}

const createGoalSuccess = () => {
  console.log('goal created')
}

const getGoalSuccess = (data) => {
  const showGoalHtml = showGoalTemplate({ goal: data.goal })
  $('.content').html(showGoalHtml)
}

const failure = () => {
  $('.error-display').text('something went wrong. please try again')
}

module.exports = {
  getGoalsSuccess,
  failure,
  createGoalSuccess,
  getGoalSuccess
}
