const Router = require('express')
const router = new Router()
const quizControler = require('../controlers/quizControlers')


router.post('/',quizControler.create)
router.get('/',quizControler.getAll)



module.exports = router