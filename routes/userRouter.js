const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')

router.get('/', userController.getAll)
router.post('/create', userController.createUser)

module.exports = router