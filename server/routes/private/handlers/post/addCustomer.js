const Customers = require('../../../../models/Customers')

function addCustomer( req, res ) {

  const newCustomer = new Customers(req.body);
  newCustomer.save(function (err) {
  if (err) return handleError(err);
   // saved!
  res.status(200).send("Guardado");
})
}

module.exports = addCustomer
