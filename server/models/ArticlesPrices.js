const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
const Schema = mongoose.Schema
const collection = 'articlesPrices'

const ArticlesPricesSchema = new Schema({
  type: String,
  leather: String,
  base_price: Number,
  assign_prices: [String],
  prices_per_customer:[{id_customer:Schema.ObjectId,price: String}]

}, { collection })

ArticlesPricesSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('ArticlesPrices', ArticlesPricesSchema)
