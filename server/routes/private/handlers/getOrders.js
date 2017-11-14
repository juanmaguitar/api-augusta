const Orders = require('../../../models/Orders')

function getOrders( req, res ) {
  Orders.find({}, function(err, orders) {
  	res.json(orders);  
  });
}

module.exports = getOrders


