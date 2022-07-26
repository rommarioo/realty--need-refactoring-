const db = require('../db');
const ApiError = require('../error/ApiError');
const {SaleRequest, Rooms} = require('../models/models');



class BuyReqControlers {
    async create(req, res) {
       const {last_name,first_name, email, phone, address, floor, rooms, square, remont, typeHome,price} = req.body;
       const buy = await SaleRequest.create({last_name,first_name, email, phone, address, floor, rooms, square, remont, typeHome,price})
       
       return res.json(buy)
    }
    
    async getAll(req, res, next) {
        const buy = await SaleRequest.findAll()

        return res.json(buy)
    }
    async getOne(req, res) {
        const {id} = req.params
        const buy = await SaleRequest.destroy({
            where: {
                id
            }
        })
            
        return res.json(buy)
    }
    async update (req, res) {
        const {id} = req.params
        const {status} = req.body
        const updatedStatus = await SaleRequest.update({ status},{where: {id}})
      
        
        return res.json (updatedStatus)
    }
  
} 


module.exports = new BuyReqControlers()