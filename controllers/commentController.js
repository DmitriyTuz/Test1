const {Art,User,Comments} = require('../models/index')

class CommentController {

    async getAll(req, res) {
        const comments = await Comments.findAll()
        return res.json(comments)
    }
}

module.exports = new CommentController()