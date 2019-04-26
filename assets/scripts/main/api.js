const config = require('../config.js')

const getGoals = () => {
  return $.ajax({
    url: config.apiUrl + '/goals'
  })
}

module.exports = {
  getGoals
}
