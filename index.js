const mongoose = require('mongoose')

const server = require('./server')
mongoose.connect(process.env.MONGO_URL || 'mongodb://root:root@localhost/bloodthirst-api?authSource=admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

const port = process.env.PORT || 3000
server.listen(port, () => console.log(`API server started on ${port}`))
