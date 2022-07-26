const Router = require('express')
const router = new Router()
const deadlinesControler = require('../controlers/deadlinesControler')


router.post('/',deadlinesControler.create)
router.get('/',deadlinesControler.getAll)



module.exports = router