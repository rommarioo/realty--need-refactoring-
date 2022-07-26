const {Areas} = require('../models/models')



class AreasControler {
    async create(req, res) {
       const {area} = req.body;
       const name = await Areas.create({area})
       return res.json(name)
    }
    async getAll(req, res, next) {
        const areas = await Areas.findAll()
        return res.json(areas)
    }


}


module.exports = new AreasControler()