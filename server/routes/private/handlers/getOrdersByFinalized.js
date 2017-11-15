const Orders = require('../../../models/Orders')
const Customers = require('../../../models/Customers')

function getFinalized( req, res ) {
 	Orders.find({state: 'FINALIZED'}, function(err, orders) {
    	Customers.populate(orders, {path: "customer_id"},function(err, orders){
        	res.json(orders);
        })
    })	
}

module.exports = getFinalized
