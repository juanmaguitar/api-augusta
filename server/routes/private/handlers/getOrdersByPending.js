const Orders = require('../../../models/Orders')
const Customers = require('../../../models/Customers')

function getPending( req, res ) {
 	Orders.find({state: 'PENDING'}, function(err, orders) {
    	Customers.populate(orders, {path: "customer_id"},function(err, orders){
        	res.json(orders);
        })
    })	
}

module.exports = getPending
