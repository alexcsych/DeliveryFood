const Menu = require('../models/deliveryModel')

module.exports.listOfDelivery = async (req, res, next) => {
  try {
    const delivery = await Menu.find({})
    console.log('delivery :>> ', delivery)
    res.status(200).send(delivery)
  } catch (error) {
    next(error)
  }
}
