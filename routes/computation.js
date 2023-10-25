var express = require('express');
var router = express.Router();
var random=(Math.random()).toFixed(2);

router.get('/', function(req, res, next) {

  console.log("==>",req.query.x);
    
 var x=req.query.x;
    if (x == undefined) {
      x = random;
    }
    var abs=Math.abs(x);
    var acos=Math.cos(x);
    var sin=Math.sin(x);
    

    res.render("computation", {
      abs: `Math.abs value of  f(${x}) is ${abs}.`,
      acos: `Math.acos value of f(${x}) is ${acos}.`,
      sin: `Math.sin value of (${x}) is ${sin}.`
    })
  });
    

module.exports=router;


