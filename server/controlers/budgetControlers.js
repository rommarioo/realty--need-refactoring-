const {Budgets} = require('../models/models')



class BudgetsControler {
    async create(req, res) {
       const {budget} = req.body;
       const name = await Budgets.create({budget})
       return res.json(name)
    }
    async getAll(req, res, next) {
        const budgets = await Budgets.findAll()
        return res.json(budgets)
    }


}


module.exports = new BudgetsControler()