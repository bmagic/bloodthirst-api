async function authenticate (ctx, next, role) {
  if (ctx.query.token === process.env.TOKEN) {
    return next()
  } else {
    ctx.throw(401)
  }
}

module.exports = {
  authenticate
}
