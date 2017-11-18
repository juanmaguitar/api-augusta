function getFilterState(req){
  req.state=req.query.state
}

function getFilterCustomer(req){
  req.customer=req.query.customer
}

module.exports = {getFilterState,getFilterCustomer }