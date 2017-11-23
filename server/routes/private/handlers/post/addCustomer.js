const Customers = require('../../../../models/Customers')

function addCustomer( req, res ) {
  const newCustomer = new Customers(req.body);
  newCustomer.save(function (err) {
    if (err){
      res.status(400).send(err.message)
    }else{
     res.status(200).send("addNew");
    } 
  })
}

module.exports = addCustomer