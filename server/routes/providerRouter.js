const Router = require('express')
const router = new Router()
const providerControlers = require('../controlers/providerControlers')


router.post('/',providerControlers.create)
router.get('/',providerControlers.getAll)
router.delete('/:id', providerControlers.getOne)
router.put('/:id', providerControlers.update)




module.exports = router