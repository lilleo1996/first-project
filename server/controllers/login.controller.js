const users = [
  {username: 'hieu', password: '123456'}
]

module.exports.renderLoginForm = (req, res) => {
  res.render('login', {title: 'Login Form'})
}

module.exports.handleLogin = (req, res) => {
  const { username, password } = req.body
  user = users.find(user => user.username === username && user.password === password)
  if(user) {
    res.status('200');
    res.redirect('/users')
  } else {
    res.status('400')
    res.send('Username or password is incorrect')
  }
}