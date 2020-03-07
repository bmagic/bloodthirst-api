module.exports = (router) => {
  router.prefix('/v1')
  router.use('/items', require('./items'))
  router.use('/characters', require('./characters'))
}
