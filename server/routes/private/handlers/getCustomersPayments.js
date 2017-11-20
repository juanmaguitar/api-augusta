const Customers = require('../../../models/Customers')
const Articles = require('../../../models/Articles')
const ObjectId = require('mongoose').Types.ObjectId; 
function getCustomersPayments( req, res ) {
//  Articles.find({'state':'finalized'}, function(err, article) {
//       Customers.populate(article, {path: "customer_id"},function(err, article){
//           const result ={
//             "contact": "abel",
//             "avg": 450
//           }
//           const resultado= article.reduce(function(valorAnterior, valorActual,i, article){
//             if(valorActual.customer_id._id === valorActual.customer_id.contact){
//               return valorActual.customer_id
//             }
//             //return valorActual.customer_id.contact
//             //if(article.customer_id._id){}
//           },{})
//           res.json(resultado);
//         })
//     })  
// }

  // Customers.find({}, function(err, customers) {
  //   Articles.find({'customer_id':ObjectId('5a0c0ac463bb9ae2b6d99323')},function(err,articles){
  //     res.json(articles); 
  //   })
  //   //res.json(customers);  
  // });

  // Customers.find()
  //   .then( customers => {
  //     return Articles.find({ "customer_id": customers[0]._id })
  //   })
  //   .then( articles => {res.json(articles)})
    

  Customers.findById('5a0c0ac463bb9ae2b6d99323')
    .then( customer => {
      console.log(customer._id)
      return Articles.find({ "customer_id": customer._id }) 
    })
    .then( articles => {
      res.json(articles)
    })  
  // Customers.findById("5a0c0ac463bb9ae2b6d99323")
  //   .then( customer => {
  //     console.log(customer)
  //     Articles.find({ "customer_id": customer._id }) 
  //   })
  //   .then( articles => {
  //     res.json(articles)
  //   })
  //   .catch( error =>{
  //     res.json({ error })
  //   })

    // ))
    // .then( articles => {res.json(articles)})
  
}
module.exports = getCustomersPayments

//Cliente | avg | Pagado | Diferencia

// const result ={
//             "contact": "abel",
//             "avg": 450
//           }