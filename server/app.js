const express = require('express')
const cors = require('cors')
const passport = require('./config/passport')
const bodyParser = require('body-parser')
const routesAuth = require('./routes/auth')
const debug = require('debug')('methods-log')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use( (req,res,next) => {
  const { method, path, body, user } = req
  debug({ method, path, body, user })
  next()
})

app.use( cors() )

app.use( passport.initialize() )

app.use(routesAuth)


module.exports = app