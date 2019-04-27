const config = require('../config.js')
const store = require('../store')

const getGoals = () => {
  return $.ajax({
    url: config.apiUrl + '/goals',
    method: 'GET',
    headers: {authorization: 'Token token=' + store.user.token}
  })
}

const createGoal = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/goals',
    method: 'POST',
    headers: {authorization: 'Token token=' + store.user.token},
    data: formData
  })
}

const getGoal = (formData) => {
  // console.log('formData is:', formData)
  return $.ajax({
    url: config.apiUrl + '/goals/' + formData.goal.id,
    method: 'GET',
    headers: {authorization: 'Token token=' + store.user.token}
  })
}

module.exports = {
  getGoals,
  createGoal,
  getGoal
}
