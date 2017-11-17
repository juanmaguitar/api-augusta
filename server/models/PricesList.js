const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
const Schema = mongoose.Schema
const collection = 'pricesList'

const PricesListSchema = new Schema({
  type: String,
  leather: String,
  base_price: Number,
  assign_prices: [String],
  prices_per_customer:[{id_customer:Schema.ObjectId,price: String}]

}, { collection })

PricesListSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('PricesList', PricesListSchema)
