function getFilters(req){
  const {hide, show} = req.query
  let filter={}
  if(show){
    filter = show.split(',').reduce((acc,param) => {
      acc[param]=1
      return acc
    },{})
  }
  (hide) ? filter[hide]=0 : req.filters=filter
}

module.exports = getFilters