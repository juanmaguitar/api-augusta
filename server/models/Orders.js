const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
const Schema = mongoose.Schema
const collection = 'orders'

const OrdersSchema = new Schema({
  id: Number,
  customer_id: String,
  entry_date:{ type: Date, default: Date.now },
  state: String,
  articles: [{
    final_customer_code: String,
    barcode: Number,
    type: String,
    leather: String,
    color: String,
    notes:String,
    price:Number,
    complements: [String],
  }]
}, { collection })

OrdersSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('Orders', OrdersSchema)
