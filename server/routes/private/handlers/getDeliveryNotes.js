const DeliveryNotes = require('../../../models/DeliveryNotes')
const Customers = require('../../../models/Customers')

async function getDeliveryNotes( req, res ) {

	const notes = await DeliveryNotes.find()
	const deliveryNote = await Customers.populate(notes, { path: "customer_id" })
	res.status(200).json(deliveryNote);

	// DeliveryNotes.find()
	// 	.then(notes => Customers.populate(notes, {path: "customer_id"}) )
	// 	.then(deliveryNote => res.status(200).json(deliveryNote) )
	
 	// DeliveryNotes.find({}, function(err, deliveryNote) {
    // 	Customers.populate(deliveryNote, {path: "customer_id"},function(err, deliveryNote){
    //     	res.status(200).json(deliveryNote);
    //     })
    // })	
}

module.exports = getDeliveryNotes
