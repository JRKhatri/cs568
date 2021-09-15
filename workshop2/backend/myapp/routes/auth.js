var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
 if(req.body.email ==="abc@miu" && req.body.password ==="abc"){
     res.status(200).json({token:"jwt_token"})
 }else{
     res.json({status :'user/password not matched'})
 }
});
router.u

module.exports = router;
