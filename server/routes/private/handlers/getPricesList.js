const PricesList = require('../../../models/PricesList')

function getPricesList( req, res ) {
  PricesList.find({}, function(err, pricesList) {
  	res.json(pricesList);  
  });
}

module.exports = getPricesList


