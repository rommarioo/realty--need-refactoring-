const {Rooms} = require('../models/models')



class RoomsControler {
    async create(req, res) {
       const {room} = req.body;
       const name = await Rooms.create({room})
       return res.json(name)
    }
    async getAll(req, res, next) {
        const rooms = await Rooms.findAll()
        return res.json(rooms)
    }
    async getOne(req,res) {
        const {id} = req.params
        const rooms = await Rooms.findOne(
            {
                where: {id}
            }
        )
        return res.json(rooms)
    }
   


}


module.exports = new RoomsControler()