const Customers = require('../../../models/Customers')
const Articles = require('../../../models/Articles')
const ObjectId = require('mongoose').Types.ObjectId; 

function getCustomersPayments( req, res ) {
  Articles.find({}, function(err, articles) {
    Customers.populate(articles, {path: "customer_id"},function(err, articles){
      //hacemos un reduce para devolver un object de este formato [{client:'a', SumPrive:100}]
      const result = articles.reduce(function(acc, valorActual){
        //buscado si el cliente que estamos mirando en la interacion ya lo guardamos en el acumulador
        //si es así le sumamos el price, si no, lo añadimos al acumulador
        const existCustomer = acc.find(function(customer){
          if(valorActual.customer_id.contact === customer.client){
            acc = acc.map(function(customer){
              if(customer.client === valorActual.customer_id.contact){
                customer.plusAllInvoces += valorActual.price
              }
            return customer
              })
           }
          return valorActual.customer_id.contact === customer.client;
        })
      //aquí añadido un cliente al acumulador si no lo teniamos ya antes
        if(existCustomer) return acc
          //console.log(valorActual.customer_id.payments)
         acc.push(
          {'client':valorActual.customer_id.contact,
           'plusAllInvoces':valorActual.price,
           'plusAllPayments':getSumPayments(valorActual.customer_id.payments
            )
           
          })
        return acc
      },[])
      res.status(200).json(result);  
    })
  })  
}

module.exports = getCustomersPayments
//[1, 2, 3].reduce((a, b) => a + b, 0);
function getSumPayments(payments){
   //console.log(payments)
  return payments.reduce( function(a, b){
        return a + b.price;
    }, 0);
}
