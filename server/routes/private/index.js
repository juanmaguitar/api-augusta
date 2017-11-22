const express = require('express')
const router = express.Router()

const passport = require('../../config/passport')
const getCustomers = require('./handlers/getCustomers')
const getCustomersPayments = require('./handlers/getCustomersPayments')
const getArticles = require('./handlers/getArticles')
const getPricesList = require('./handlers/getPricesList')
const getDeliveryNotes = require('./handlers/getDeliveryNotes')

const updateCustomer = require('./handlers/update/updateCustomer')

const addCustomer = require('./handlers/post/addCustomer')

router.use( passport.authenticate('jwt', { session: false } ) )

router.get('/customers', getCustomers)
router.get('/customers/payments', getCustomersPayments)
router.put('/customer/:id',updateCustomer)
router.post('/customer',addCustomer)

router.get('/articles', getArticles)
router.get('/pricesList', getPricesList)
router.get('/deliveryNotes', getDeliveryNotes)


module.exports = router
