const Validator = require('validator')

module.exports = function(data) {
  let errors = {}

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email is required'
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid'
  }

  if (Validator.isEmpty(data.login)) {
    errors.login = 'Login is required'
  }

  if (!Validator.isLength(data.login, { min: 4, max: 30 })) {
     errors.login = 'Login required between 6 & 30 characters'
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password is required'
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
     errors.password = 'Password required between 6 & 30 characters'
  }

  if (Validator.isEmpty(data.confirmpassword)) {
    errors.confirmpassword = 'Confirm password is required'
  }

  if (!Validator.equals(data.password, data.confirmpassword)) {
    errors.confirmpassword = 'Password must match'
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}
