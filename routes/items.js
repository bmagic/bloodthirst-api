const Router = require('koa-router')
const router = new Router()
const Items = require('../controllers/items')
const Auth = require('../controllers/auth')

router.get('/', Items.getItems)
router.post('/', Auth.authenticate, Items.addItem)

module.exports = router.routes()
