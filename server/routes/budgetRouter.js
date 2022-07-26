const Router = require('express')
const router = new Router()
const budgetControler = require('../controlers/budgetControlers')


router.post('/',budgetControler.create)
router.get('/',budgetControler.getAll)



module.exports = router