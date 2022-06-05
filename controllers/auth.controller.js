const getSignup = (req, res) => {
  res.render('customer/auth/signup', { pageTitle: 'Signup' })
}
const getLogin = (req, res) => {}

module.exports = { getSignup, getLogin }
