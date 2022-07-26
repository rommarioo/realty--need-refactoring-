const Router = require('express')
const router = new Router()
const decorationControler = require('../controlers/decorationControlers')


router.post('/',decorationControler.create)
router.get('/',decorationControler.getAll)



module.exports = router