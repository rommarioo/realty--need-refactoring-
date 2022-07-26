const ApiError = require('../error/ApiError');
const {QuizProperty} = require('../models/models');



class QuizControlers {
    async create(req, res, next) {
        try {
            const {status,  clientId} = req.body;
            const quiz = await QuizProperty.create({status,  clientId})
             return res.json(quiz)

        }catch(e){
            next(ApiError.badRequest(e.message))
        }
       
       
    }
    async getAll(req, res, next) {
        const quizs = await QuizProperty.findAll()
        return res.json(quizs)
    }


} 


module.exports = new QuizControlers()