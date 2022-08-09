const Router = require('express')
const router = new Router()
const artController = require('../controllers/artController')

router.get('/', artController.getArtWithUserComments)
router.get('/ID', artController.getOne)
router.post('/create', artController.createArt)
router.post('/ID/comments', artController.createComment)

// router.get('/withUserComments', artController.getArtWithUserComments)
router.get('/withUserComment', artController.getArtWithUserComment)
module.exports = router