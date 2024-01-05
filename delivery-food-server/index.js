const express = require('express')
const mongoose = require('mongoose')
const routes = require('./api/routes/diliveryRoutes')
const { errHandler } = require('./api/middleware/errHandler')
const hostname = '127.0.0.1'
const port = 5000
const app = express()

mongoose.connect('mongodb://localhost:27017/dilivery-food')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  next()
})
app.use(routes)

app.use(errHandler)

app.listen(port, hostname, () => {
  console.log(`Server running ${hostname} on ${port}`)
})
