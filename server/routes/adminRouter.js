const Router = require('express')
const router = new Router()
const adminControler = require('../controlers/adminControlers')
const authMiddleware = require('../middeware/authMiddleware')

router.post('/registration',adminControler.registration)
router.post('/login',adminControler.login)
router.get('/auth', authMiddleware, adminControler.check)



module.exports = router