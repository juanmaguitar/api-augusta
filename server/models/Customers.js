const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
const Schema = mongoose.Schema
const collection = 'customers'

const CustomerSchema = new Schema({
  entry_date:{ type: Date, default: Date.now },
  contact: String,
  address: String,
  city: String,
  email: String,
  contact_id: String,
  fiscal_name: String,
  fiscal_address: String,
  fiscal_city: String,
  fiscal_id: String,
  type: String,
  phone: Number,
  inactive: Boolean,
  notes: String,
  delivery_type: String,
  delivery_days: []
}, { collection })

CustomerSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('Customers', CustomerSchema)


/* 

----------------Table Particular-----------
| Contact || Phone | Email || Contact_id|| City || Address | Notes |

----------------Table Empresa-----------
| fiscal_name | Contact || Address || City | Email || Contact_id|| Phone | Notes |



*/