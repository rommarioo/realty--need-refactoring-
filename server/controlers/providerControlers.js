const db = require('../db');
const ApiError = require('../error/ApiError');
const {Provider, Rooms} = require('../models/models');



class ProviderControlers {
    async create(req, res) {
       const {name, email, phone, area,  address, square, rooms,floor,statusbuild,typeHome} = req.body;
       const provider = await Provider.create({name, email, phone, area,  address, square, rooms,floor,statusbuild,typeHome})
       
       return res.json(provider)
    }
    
    async getAll(req, res, next) {
        const provider = await Provider.findAll()

        return res.json(provider)
    }
    async getOne(req, res) {
        const {id} = req.params
        const provider = await Provider.destroy({
            where: {
                id
            }
        })
            
        return res.json(provider)
    }
    async update (req, res) {
        const {id} = req.params
        const {status} = req.body
        const updatedStatus = await Provider.update({ status},{where: {id}})
      
        
        return res.json (updatedStatus)
    }
  
} 


module.exports = new ProviderControlers()