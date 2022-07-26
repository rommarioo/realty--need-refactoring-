const db = require('../db');
const ApiError = require('../error/ApiError');
const {Client, Rooms} = require('../models/models');



class ClientControlers {
    async create(req, res) {
       const {last_name,first_name, email, phone, roomName, areaName, budgetName, decorationName, typeHome, typeBuy} = req.body;
       const client = await Client.create({last_name,first_name, email, phone, roomName,areaName, budgetName, decorationName, typeHome, typeBuy })
       
       return res.json(client)
    }
    
    async getAll(req, res, next) {
        const clients = await Client.findAll()

        return res.json(clients)
    }
    async getOne(req, res) {
        const {id} = req.params
        const client = await Client.destroy({
            where: {
                id
            }
        })
            
        return res.json(client)
    }
    async update (req, res) {
        const {id} = req.params
        const {status} = req.body
        const updatedStatus = await Client.update({ status},{where: {id}})
      
        
        return res.json (updatedStatus)
    }
  
} 


module.exports = new ClientControlers()