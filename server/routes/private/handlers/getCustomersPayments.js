const Customers = require('../../../models/Customers')
const Articles = require('../../../models/Articles')
function getCustomers( req, res ) {
  // Customers.find({}, function(err, customers) {
  //   console.log(customers[0]._id)
  //     Articles.findById(customers[0]._id,function(err,article){
  //       res.json(article);
  //     })  
  // })
  Articles.findOne({'customer_id':'5a0c0ac463bb9ae2b6d99323'},function(err,article){
    res.json(article);
  })  
}
//5a0c0ac463bb9ae2b6d99323
module.exports = getCustomers


