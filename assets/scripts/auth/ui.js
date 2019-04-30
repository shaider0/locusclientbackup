const store = require('../store')

const signUpSuccess = function (formData) {
  $('form').trigger('reset')
  $('.sign-up-display').text('New account created! Please sign in below.')
}

const signInSuccess = function (formData) {
  store.user = formData.user
  $('form').trigger('reset')
  $('.title').hide()
  $('.tagline').hide()
  $('.go-back').hide()
  $('.show-sign-up').hide()
  $('.show-sign-in').hide()
  $('.sign-up-div').hide()
  $('.sign-in-div').hide()
  $('nav').show()
  $('.main-overlay').prepend($('nav'))
  $('.message-display').text('')
  $('.main-container').css('background-image', 'url("https://images.unsplash.com/photo-1555985202-12975b0235dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2549&q=80")')
  $('.welcome-message').show()
}

const signOutSuccess = function () {
  store.user = null
  $('form').trigger('reset')
  $('nav').hide()
  $('.title').show()
  $('.tagline').show()
  $('.show-sign-up').show()
  $('.show-sign-in').show()
  $('.goal-div').hide()
  $('.message-display').text('')
  $('.welcome-message').hide()
  $('.main-container').css('background-image', 'url("https://images.unsplash.com/photo-1528818955841-a7f1425131b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80")')

  // $('.logo').show()
  // $('.logo-overlay').show()
  // $('main').hide()
  // $('.show-sign-up').show()
  // $('.show-sign-in').show()
  // $('.sign-up-display').text('')
  // $('.sign-in-display').text('')
  // $('.change-password-display').text('')
  // $('.sign-out-display').text('')
  // $('.tagline').text('See you later, Sam!')
}

const changePwSuccess = function () {
  $('.message-display').text('Password changed!')

  const clearText = () => {
    $('.message-display').text('')
  }

  setTimeout(clearText, 3000)

  const hide = () => {
    $('.change-password-form-div').hide()
  }
  setTimeout(hide, 3000)

  $('form').trigger('reset')

  const show = () => {
    $('nav').show()
    $('.welcome-message').show()
  }
  setTimeout(show, 3000)
}

const failure = function () {
  $('form').trigger('reset')
  $('.message-display').text('Something went wrong. Please try again.')

  const clearError = () => {
    $('.message-display').text('')
  }
  setTimeout(clearError, 3000)
}

module.exports = {
  signInSuccess,
  signUpSuccess,
  changePwSuccess,
  signOutSuccess,
  failure
}
