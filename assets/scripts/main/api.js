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
  return $.ajax({
    url: config.apiUrl + '/goals/' + formData.goal.id,
    method: 'GET',
    headers: {authorization: 'Token token=' + store.user.token}
  })
}

const deleteGoal = (id) => {
  console.log('id is', id)
  return $.ajax({
    url: config.apiUrl + '/goals/' + id,
    method: 'DELETE',
    headers: {authorization: 'Token token=' + store.user.token}
  })
}

const updateGoal = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/goals/' + formData.goal.id,
    method: 'PATCH',
    headers: {authorization: 'Token token=' + store.user.token},
    data: formData
  })
}

module.exports = {
  getGoals,
  createGoal,
  getGoal,
  deleteGoal,
  updateGoal
}
