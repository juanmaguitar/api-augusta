const Customers = require('../../../models/Customers')

function getCustomerById( req, res ) {
  Customers.findById(req.params.id, function(err, users) {
  	res.json(users);  
  });
}

module.exports = getCustomerById


