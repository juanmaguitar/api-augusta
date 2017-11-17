const express = require('express')
const router = express.Router()

const passport = require('../../config/passport')
const getMyInfo = require('./handlers/getMyInfo')
const getCustomers = require('./handlers/getCustomers')
const getCustomersById = require('./handlers/getCustomersById')
const getArticles = require('./handlers/getArticles')
const getPricesList = require('./handlers/getPricesList')
const getDeliveryNotes = require('./handlers/getDeliveryNotes')


router.use( passport.authenticate('jwt', { session: false } ) )

router.get('/me', getMyInfo)
router.get('/customers', getCustomers)
router.get('/customer/:id', getCustomersById)
router.get('/articles', getArticles)
router.get('/pricesList', getPricesList)
router.get('/deliveryNotes', getDeliveryNotes)


module.exports = router
