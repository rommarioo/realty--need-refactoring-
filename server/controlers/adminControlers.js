const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {Manager, AllRequest } = require('../models/models')

const generateJwt = (id, login) => {
    return jwt.sign(
        {id, login },
         process.env.SECRET_KEY,
         {expiresIn: '24h'})
        
}


class AdminControler {
    async registration(req, res, next) {
        const {login, password} = req.body
        if (!login || !password) {
            return next(ApiError.badRequest('Некоррентный логин или пароль'))
        }
        const candidate = await Manager.findOne({where: {login}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким логинов уже существует'))
        }
        const hasPassword = await bcrypt.hash(password, 5)
        const manager = await Manager.create({login, password: hasPassword})
        const allrequest = await AllRequest.create({managerid: manager.id})
        const token = generateJwt(manager.id, manager.login)
        return res.json({token})
    
    }

    async login(req, res, next) {
        const {login, password} = req.body
        const manager = await Manager.findOne({where: {login}})
        if(!manager){
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, manager.password)
        if (!comparePassword) {
            return next(ApiError.internal('Неверный пароль'))
        }
        const token = generateJwt(manager.id, manager.login)
        return res.json({token})  
    }

    async check(req, res, next) {
        const token = generateJwt(req.manager.id, req.manager.login)
        return res.json({token})
    }
}


module.exports = new AdminControler()