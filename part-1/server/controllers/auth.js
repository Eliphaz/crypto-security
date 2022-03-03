const users = []

const bcryptjs = require('bcryptjs')

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body

      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && bcryptjs.compareSync(password, users[i].password)) {
          return res.status(200).send(users[i])
        }
      }
      return res.status(400).send("User not found.")
    },
    register: (req, res) => {
      let {password} = req.body
      const salt = bcryptjs.genSaltSync(5)
      const pinHash = bcryptjs.hashSync(password, salt)
      console.log(pinHash)

      req.body.password = pinHash

        console.log('Registering User')
        console.log(req.body)
        users.push(req.body)
        res.status(200).send(req.body)
        console.log(users)
    }
}