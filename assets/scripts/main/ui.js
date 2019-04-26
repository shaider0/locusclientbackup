'use strict'

const showGoalsTemplate = require('../templates/goal-listing.handlebars')

const getGoalsSuccess = (data) => {
  const showGoalsHtml = showGoalsTemplate({ goals: data.goals })
  $('.content').html(showGoalsHtml)
}

const createGoalSuccess = () => {
  console.log('goal created')
}

const failure = (error) => {
  console.error('something went wrong', error)
}

module.exports = {
  getGoalsSuccess,
  failure,
  createGoalSuccess
}
