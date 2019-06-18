'use strict'

const showGoalsTemplate = require('../templates/goal-listing.handlebars')
const showGoalTemplate = require('../templates/goal-listing-single.handlebars')
const showTasksTemplate = require('../templates/task-listing.handlebars')
const showTaskTemplate = require('../templates/task-listing-single.handlebars')

const getGoalsSuccess = (data) => {
  $('form').trigger('reset')
  $('.welcome-message').hide()
  $('.time').hide()
  $('.goal-forms').show()
  const showGoalsHtml = showGoalsTemplate({ goals: data.goals })
  $('.content').html(showGoalsHtml)
  $('.content').show()

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

const getTasksSuccess = (data) => {
  $('form').trigger('reset')
  $('.welcome-message').hide()
  $('.goal-forms').hide()
  $('.task-forms').show()
  const showTasksHtml = showTasksTemplate({ tasks: data.tasks })
  $('.content').html(showTasksHtml)

  if (!data.tasks.length) {
    $('.content').text('No tasks found. Create a new one now!')
    const clearNoTasks = () => {
      $('.content').text('')
    }
    setTimeout(clearNoTasks, 3000)
  }
}

const getTaskSuccess = (data) => {
  $('form').trigger('reset')
  const showTaskHtml = showTaskTemplate({ task: data.task })
  $('.content').html(showTaskHtml)
}

module.exports = {
  getGoalsSuccess,
  failure,
  getGoalSuccess,
  getTasksSuccess,
  getTaskSuccess
}
