const {Decorations} = require('../models/models')



class DecorationsControler {
    async create(req, res) {
       const {decoration} = req.body;
       const name = await Decorations.create({decoration})
       return res.json(name)
    }
    async getAll(req, res, next) {
        const decorations = await Decorations.findAll()
        return res.json(decorations)
    }


}


module.exports = new DecorationsControler()