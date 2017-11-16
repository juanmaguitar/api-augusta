const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
const Schema = mongoose.Schema
const collection = 'orders'

const OrdersSchema = new Schema({
  id:Number,
  customer_id: { type: Schema.ObjectId, ref: "Customer" } ,
  entry_date:{ type: Date, default: Date.now },
  articles: [{type: Schema.ObjectId, ref: "Articles"}]
}, { collection })

OrdersSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('Orders', OrdersSchema)
