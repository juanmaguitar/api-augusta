const Customers = require('../../../../models/Customers')

function updateCustomer( req, res ) {
  const {id,body} =req.params
  if(id === 'undefined'){
    res.status(400).send('no pass ID customer');
  }else {
    Customers.findByIdAndUpdate(id, { $set: req.body}, { new: true }, function (err, customer) {
      if (err) return handleError(err);
      res.status(200).send(customer);
    })
  }
}

module.exports = updateCustomer
