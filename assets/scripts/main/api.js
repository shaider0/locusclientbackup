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
  console.log(id)
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

const getTasks = () => {
  return $.ajax({
    url: config.apiUrl + '/tasks',
    method: 'GET',
    headers: {authorization: 'Token token=' + store.user.token}
  })
}

const createTask = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/tasks',
    method: 'POST',
    headers: {authorization: 'Token token=' + store.user.token},
    data: formData
  })
}

const getTask = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/tasks/' + formData.task.id,
    method: 'GET',
    headers: {authorization: 'Token token=' + store.user.token}
  })
}

const getTaskForUpdate = (id) => {
  return $.ajax({
    url: config.apiUrl + '/tasks/' + id,
    method: 'GET',
    headers: {authorization: 'Token token=' + store.user.token}
  })
}

const deleteTask = (id) => {
  return $.ajax({
    url: config.apiUrl + '/tasks/' + id,
    method: 'DELETE',
    headers: {authorization: 'Token token=' + store.user.token}
  })
}

const updateTask = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/tasks/' + formData.task.id,
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
  updateGoal,
  getTasks,
  createTask,
  getTask,
  deleteTask,
  updateTask,
  getTaskForUpdate
}
