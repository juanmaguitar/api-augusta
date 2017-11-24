const DeliveryNotes = require('../../../models/DeliveryNotes')
const Customers = require('../../../models/Customers')

/* this function fet delivery notes... */
async function getDeliveryNotes( req, res ) {
	const notes = await DeliveryNotes.find()
	const deliveryNote = await Customers.populate(notes, { path: "customer_id" })
	res.status(200).json(deliveryNote);
  //el status 200 no sería necesario pero aclara el código
}

module.exports = getDeliveryNotes
