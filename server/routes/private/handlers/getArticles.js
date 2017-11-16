const Articles = require('../../../models/Articles')

function getArticles( req, res ) {
	const state= (req.state) ? {state:req.state} : {}
  Articles.find(state, function(err, articles) {
  	res.json(articles);  
  });
}

module.exports = getArticles


