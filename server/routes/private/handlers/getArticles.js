const Articles = require('../../../models/Articles')

function getArticles( req, res ) {
  Articles.find({}, function(err, articles) {
  	res.json(articles);  
  });
}

module.exports = getArticles


