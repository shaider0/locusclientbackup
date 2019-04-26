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

// data: {
//       'game': {
//         'cell': {
//           'index': store.index,
//           'value': store.value
//         },
//         'over': store.gameOver
//       }
//     }

module.exports = {
  getGoals,
  createGoal
}
