'use strict'

const showGoalsTemplate = require('../templates/goal-listing.handlebars')
const showGoalTemplate = require('../templates/goal-listing-single.handlebars')

const getGoalsSuccess = (data) => {
  $('form').trigger('reset')
  $('.main-overlay').append($('.goal-div'))
  $('.goal-div').show()
  const showGoalsHtml = showGoalsTemplate({ goals: data.goals })
  $('.content').html(showGoalsHtml)

  if (!data.goals.length) {
    $('.content').text('No goals found. Create a new one now!')
    const clearNoGoals = () => {
      $('.content').text('')
    }
    setTimeout(clearNoGoals, 3000)
  }
}

const getGoalSuccess = (data) => {
  $('form').trigger('reset')
  const showGoalHtml = showGoalTemplate({ goal: data.goal })
  $('.content').html(showGoalHtml)
}

const failure = () => {
  $('form').trigger('reset')
  $('.message-display').text('Something went wrong. Please try again')

  const clearError = () => {
    $('.message-display').text('')
  }
  setTimeout(clearError, 3000)
}

module.exports = {
  getGoalsSuccess,
  failure,
  getGoalSuccess
}
