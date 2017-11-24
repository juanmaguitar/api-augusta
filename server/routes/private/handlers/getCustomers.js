const Customers = require('../../../models/Customers')

async function getCustomers( req, res ) {
  const { customer: type } = req
	const query = type ? { type } : {}
  const customers = await Customers.find(query)
  res.status(200).json(customers)
}

module.exports = getCustomers


