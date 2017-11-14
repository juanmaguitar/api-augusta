const express = require('express')
const router = express.Router()

const passport = require('../../config/passport')
const getMyInfo = require('./handlers/getMyInfo')

router.use( passport.authenticate('jwt', { session: false } ) )

router.get('/me', getMyInfo)

module.exports = router