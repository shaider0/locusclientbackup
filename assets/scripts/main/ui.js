'use strict'

const showGoalsTemplate = require('../templates/goal-listing.handlebars')
const showGoalTemplate = require('../templates/goal-listing-single.handlebars')

const getGoalsSuccess = (data) => {
  const showGoalsHtml = showGoalsTemplate({ goals: data.goals })
  $('form').trigger('reset')
  $('.content').html(showGoalsHtml)
  $('.main-overlay').append($('.goal-div'))
  $('.goal-div').show()
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
