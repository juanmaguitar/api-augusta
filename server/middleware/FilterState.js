function getFilterState(req){
  req.state=req.query.state
}

module.exports = getFilterState