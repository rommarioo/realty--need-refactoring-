const Router = require('express')
const router = new Router()
const areaControler = require('../controlers/areaControlers')


router.post('/',areaControler.create)
router.get('/',areaControler.getAll)



module.exports = router