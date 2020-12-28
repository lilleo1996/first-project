module.exports.getUsers = (req, res, next) => {
  res.render('users', {
    title: 'Users',
    users: [
      {id: 1, name: 'Hieu'},
      {id: 2, name: 'Huy'},
      {id: 3, name: 'Tu'},
    ]
  })
  next()
}

module.exports.getUser = (req, res, next) => {
  const { id, name } = req.params
  res.send(`<h3 style="color: blue">User with id: ${id} and name: ${name}</h3>`)
  next()
}

module.exports.addUser = (req, res) => {
  const { id, name } = req.body
  res.send(`<h3 style="color: blue">Add user with id: ${id} and name: ${name}</h3>`)
}

module.exports.updateUser = (req, res) => {
  const { id } = req.params
  res.send(`<h3 style="color: blue">Update user with id: ${id}</h3>`)
}

module.exports.deleteUser = (req, res) => {
  const { id } = req.params
  res.send(`<h3 style="color: blue">Delete user with id: ${id}</h3>`)
}

// module.exports = {
//   getUsers
// }