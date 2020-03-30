'use strict'

const showGoalsTemplate = require('../templates/goal-listing.handlebars')
const showGoalTemplate = require('../templates/goal-listing-single.handlebars')

const getGoalsSuccess = (data) => {
  console.log(data)
  $('form').trigger('reset')
  $('.welcome-message').hide()
  $('.content').show()
  $('.content').text('')
  $('.task-forms').hide()
  $('.update-goal-form').hide()
  $('.date').hide()
  $('.time').hide()
  $('.weather').hide()
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
  $('.date').hide()
  $('.time').hide()
  $('.weather').hide()
  $('.task-forms').show()
  $('.update-task-form').hide()
  const showTasksHtml = showTasksTemplate({ tasks: data.tasks })
  $('.content').show()
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

const getTaskForUpdateSuccess = (data) => {
  $('.update-task-id').attr('value', data.task.id)
  $('.update-task-title').attr('value', data.task.title)
  $('.update-task-description').attr('value', data.task.description)
}

const getGoalForUpdateSuccess = (data) => {
  $('.update-goal-id').attr('value', data.goal.id)
  $('.update-goal-title').attr('value', data.goal.title)
  $('.update-goal-description').attr('value', data.goal.description)
}

module.exports = {
  getGoalsSuccess,
  failure,
  getGoalSuccess,
  getTasksSuccess,
  getTaskSuccess,
  getTaskForUpdateSuccess,
  getGoalForUpdateSuccess
}
