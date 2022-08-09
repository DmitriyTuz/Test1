const Router = require('express')
const router = new Router()
const artRouter = require('./artRouter')
const userRouter = require('./userRouter')
const commentRouter = require('./commentRouter')

router.use('/art', artRouter)
router.use('/users', userRouter)
router.use('/comments', commentRouter)

module.exports = router