const Orders = require('../../../models/Orders')
const Customers = require('../../../models/Customers')

function getOrders( req, res ) {
 	Orders.find({}, function(err, orders) {
    	Customers.populate(orders, {path: "customer_id"},function(err, orders){
        	res.json(orders);
        })
    })	
}

module.exports = getOrders
