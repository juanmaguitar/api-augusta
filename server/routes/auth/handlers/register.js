const User = require('../../../models/User')

function register(req,res) {
  const { username, password } = req.body
  const account = new User({ username })

  User.register( account, password, (err, user) => {
    if (err) res.status(500).json({ msg: 'Error creating user'})
    res.status(200).json({ msg: 'User succesfully created!'})
  })
}

module.exports = register