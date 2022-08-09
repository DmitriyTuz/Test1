const sequelize = require('../db')
const {User} = require('../models/index')

class UserController {
    async createUser(req, res) {
        // let query = `ALTER TABLE Users AUTO_INCREMENT = 100;`
        // await sequelize.query(query)

        const {name, age, location} = req.body
        const user = await User.create({name, age, location})
        return res.json(user)
    }

    async getAll(req, res) {
        const users = await User.findAll()
        return res.json(users)
    }
}

module.exports = new UserController()