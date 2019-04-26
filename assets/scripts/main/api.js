const config = require('../config.js')
const store = require('../store')

const getGoals = () => {
  return $.ajax({
    url: config.apiUrl + '/goals',
    method: 'GET',
    headers: {authorization: 'Token token=' + store.user.token}
  })
}

module.exports = {
  getGoals
}
