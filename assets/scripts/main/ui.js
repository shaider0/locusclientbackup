'use strict'

const showGoalsTemplate = require('../templates/goal-listing.handlebars')

const getGoalsSuccess = (data) => {
  console.log('data: ', data)
  const showGoalsHtml = showGoalsTemplate({ goals: data.goals })
  $('.content').text(showGoalsHtml)
}

// const clearBooks = () => {
//   $('.content').empty()
// }

const failure = (error) => {
  console.error(error)
}

module.exports = {
  getGoalsSuccess,
  // clearBooks,
  failure
}
