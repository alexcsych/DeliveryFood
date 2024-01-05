const express = require('express')
const router = express.Router()
const { listOfDelivery } = require('../controllers/deliveryController')

router.route('/delivery').get(listOfDelivery)

module.exports = router
