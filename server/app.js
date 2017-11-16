const express = require('express')
const cors = require('cors')
const passport = require('./config/passport')
const bodyParser = require('body-parser')

const routesAuth = require('./routes/auth')
const routesPrivate = require('./routes/private')

const debug = require('debug')('methods-log')

const getFilterState = require('./middleware/FilterState')

const app = express()

app.use((req,res,next) => {
   getFilterState(req)
  next()
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use( (req,res,next) => {
  const { method, path, body,state } = req
  debug({ method, path, body,state })
  next()
})

app.use( cors() )

app.use( passport.initialize() )

app.use(routesAuth)
app.use(routesPrivate)


module.exports = app