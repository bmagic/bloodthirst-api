const Router = require('koa-router')
const router = new Router()
const Characters = require('../controllers/characters')

router.get('/', Characters.getCharacters)

module.exports = router.routes()
