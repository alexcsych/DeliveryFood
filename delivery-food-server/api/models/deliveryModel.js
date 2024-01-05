const mongoose = require('mongoose')

const AssortmentSchema = new mongoose.Schema({
  id: Number,
  name: String,
  image: String,
  description: String,
  disabled: Boolean,
  price: Number
})

const RestaurantSchema = new mongoose.Schema({
  id: Number,
  name: String,
  image: String,
  assortment: [AssortmentSchema]
})

const DeliverySchema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    image: {
      type: String
    },
    menu: [RestaurantSchema]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Menu', DeliverySchema)
