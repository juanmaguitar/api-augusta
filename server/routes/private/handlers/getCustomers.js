const Customers = require('../../../models/Customers')

function getCustomers( req, res ) {
	const customer= (req.customer) ? {type:req.customer} : {}
  Customers.find(customer, function(err, users) {
  	res.json(users);  
  });
}

module.exports = getCustomers


