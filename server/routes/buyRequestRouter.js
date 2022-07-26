const Router = require('express')
const router = new Router()
const buyRequestControlers = require('../controlers/buyRequestControlers')


router.post('/',buyRequestControlers.create)
router.get('/',buyRequestControlers.getAll)
router.delete('/:id', buyRequestControlers.getOne)
router.put('/:id', buyRequestControlers.update)




module.exports = router