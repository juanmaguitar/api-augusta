const DeliveryNotes = require('../../../models/DeliveryNotes')
const Customers = require('../../../models/Customers')

async function getDeliveryNotes( req, res ) {

	const notes = await DeliveryNotes.find()
	const deliveryNote = await Customers.populate(notes, { path: "customer_id" })
	res.status(200).json(deliveryNote);

}

module.exports = getDeliveryNotes
