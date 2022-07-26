const Router = require('express')
const router = new Router()
const clientControlers = require('../controlers/clientControlers')


router.post('/',clientControlers.create)
router.get('/',clientControlers.getAll)
router.delete('/:id', clientControlers.getOne)
router.put('/:id', clientControlers.update)




module.exports = router