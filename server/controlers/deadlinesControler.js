const {Deadlines} = require('../models/models')



class DeadlinesControler {
    async create(req, res) {
       const {deadline} = req.body;
       const name = await Deadlines.create({deadline})
       return res.json(name)
    }
    async getAll(req, res, next) {
        const deadlines = await Deadlines.findAll()
        return res.json(deadlines)
    }


}


module.exports = new DeadlinesControler()