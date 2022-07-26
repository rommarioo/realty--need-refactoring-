const Router = require('express')
const router = new Router()
const roomControler = require('../controlers/roomControlers')


router.post('/',roomControler.create)
router.get('/',roomControler.getAll)
router.get('/:id',roomControler.getOne)


module.exports = router