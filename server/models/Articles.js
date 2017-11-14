const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
const Schema = mongoose.Schema
const collection = 'articles'

const ArticlesSchema = new Schema({
  type: String,
  leather: String,
  base_price: Number
}, { collection })

ArticlesSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('Articles', ArticlesSchema)
