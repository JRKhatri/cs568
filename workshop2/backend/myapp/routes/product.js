var express = require('express');
var router = express.Router();

let products = [{id :1, name:"Toyota Suv", price:40000, brand:'Toyota', model:"Rav4", year:"2020",
review:[{rId:1, title:"title1", description:"this is product"},{rId:2, title:"title2", description:"this is not product"}]},
{id :2, name:"Toyota Sedan", price:30000, brand:'Toyota', model:"Camry", year:"2018",review:[{rId:1, title:"title1", description:"this is product"}]},
{id :3, name:"Toyota HatchBack", price:34000, brand:'Toyota', model:"Corolla", year:"2016", review:[{rId:1, title:"title1", description:"this is product"}]}
]
/* GET users listing. */
router.get('/', function(req, res, next) {
  if(req.headers.authorization === 'jwt_token'){
    res.json(products)
  }
  res.json({status:'auth_error'})
  
});

router.get('/:id/details', function(req, res, next) {
  if(req.headers.authorization === 'jwt_token'){
    res.json(products[req.params.id-1])
  }
  res.json({status:'auth_error'})
  
});

router.post('/', function(req, res, next){
if(req.headers.authorization === 'jwt_token'){
  const find = products.find(item => item.id == req.body.id);
  if(find){
    res.json({Error: "id already exists"})
  }else{
  products.push(req.body)
  res.status(200).json(req.body)
  console.log(products[products.length-1])
  }
} else{
  res.json({status:"error in username or password"})
}
})

router.put('/:id/update', function(req, res, next){

  if(req.headers.authorization === "jwt_token"){
    console.log(req.params.id)
     const index = products.findIndex(item => item.id == req.params.id) //params is string value so ==
     products[index] = req.body
     res.json({status:"product updated"})
  }
  res.json({status:'auth_error'})
})

router.delete('/:id/delete', function(req, res, next){
  if(req.headers.authorization === 'jwt_token'){
   products = products.filter(item => {return item.id != req.params.id})
   res.status(200).json({status: "delete Successfull"})
   
  } 
  res.json({status:"authorization error"})
})

router.post('/:id/addReviews', function(req,res,next){ 
  console.log("i enterded") 
  if(req.headers.authorization === "jwt_token"){
    console.log(req.params.id)
    const find = products.find(item => item.id == req.body.id);
  if(!find){
     const index = products.findIndex(item => item.id == req.params.id) //params is string value so ==
     products[index].review.push(req.body)
     res.json({status:"review added"})
  }else{
    res.json({status: "review id exists"})
  }
}
  res.json({status:'auth_error'})
})


module.exports = router;