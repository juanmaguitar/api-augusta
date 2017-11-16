const ArticlesPrices = require('../../../models/ArticlesPrices')

function getArticlesPrices( req, res ) {
  ArticlesPrices.find({}, function(err, articlesPrices) {
  	res.json(articlesPrices);  
  });
}

module.exports = getArticlesPrices


