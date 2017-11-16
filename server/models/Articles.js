const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
const Schema = mongoose.Schema
const collection = 'articles'

const ArticlesSchema = new Schema({
  customer_id: { type: Schema.ObjectId, ref: "Customers" } ,
  entry_date:{ type: Date, default: Date.now },
  output_date:Date,
  final_customer_code: String,
  barcode: Number,
  type: {type: String},
  leather: String,
  color: String,
  notes: String,
  price: Number,
  state: String,
  complements: [String]
}, { collection })

ArticlesSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('Articles', ArticlesSchema)
