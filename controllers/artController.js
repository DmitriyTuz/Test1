const {Art,User,Comments} = require('../models/index')
const ApiError = require('../error/ApiError')

class ArtController {

   async createArt(req, res) {
        const {title, artist, year} = req.body
        const art = await Art.create({title, artist, year})
        return res.json(art)
    }

    async createComment(req, res, next) {
        try {
            const {id, userId, artId, name, content} = req.body

            if (!artId) {
                return next(ApiError.badRequest('Не задан параметр ArtId'))
            }

            if (!name ) {
                return next(ApiError.badRequest('Не задан параметр name'))
            }

            if (!content) {
                return next(ApiError.badRequest('Не задан параметр content'))
            }

            if (userId) {
                let comment1 = await Comments.create({id, content, name, userId, artId}) // если юзер есть в базе создаём коментарий
                return res.json(comment1)
            } else {
                let comment2 = await Comments.findOne({ // если юзера нет в базе то проверяем
                    where: {                                   // создавал ли он уже коментарий
                        name: name
                    }
                })
                // if (comment2 === null) comment2 = false

                if (!comment2) {
                    let comment3 = await Comments.create({id, name, content, artId}) // если не создавал создаём
                    return res.json(comment3)
                } else {
                    return next(ApiError.badRequest("Такого юзера нет в базе и он уже делал комментарий")) // иначе выводим ошибку
                }
            }

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const arts = await Art.findAll()
        return res.json(arts)
    }

    async getOne(req, res) {
        const {id} = req.query
        const art = await Art.findOne(
            {
                where: {id}
            }
        )
        return res.json(art)
    }

    async getArtWithUserComments(req, res) {
        let art = await Art.findAll({attributes:["id", ["title","название"], "artist", "year"], // title AS название
            include: [{
                model: Comments,
                attributes:["id", "name", "content", "userId"],
                as: 'comments', // Comments AS comments
                required: false,
                separate: true,
                order: [['id']]
            }]
        })
        // art.reverse()
        // for (let i=0; i<length.)
        return res.json(art)
        // return res.json(art[1].Comments[0].name)
    };

    async getArtWithUserComment(req, res) {

        /*const {id, name} = req.query
        let user1 = await User.findOne( {where: {id, name}})

        if (user1) {
            let art = await Art.findAll({attributes:["id", "title", "artist", "year"],
                include: [{
                    model: Comments, attributes:["id", "content"],
                    required: false,
                    include: [{
                        model: User, attributes:["name"],
                        required: false
                    }]
                }]
            })
            art.reverse()
            return res.json(art)
        } else {
            let art = await Art.findAll({attributes:["id", "title", "artist", "year"],
                include: [{
                    model: Comments, attributes:["id", "content", "userId"],
                    required: false,
                    include: [{
                        model: User, attributes:["name"],
                        required: false
                    }]
                }]
            })
            art.reverse()
            return res.json(art)
        }*/

    };
}

module.exports = new ArtController()