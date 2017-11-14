const Customers = require('../../../models/Customers')

function getCustomers( req, res ) {
  Customers.find({}, function(err, users) {
  	res.json(users);  
  });
}

module.exports = getCustomers


