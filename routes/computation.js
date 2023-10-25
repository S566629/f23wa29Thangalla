var express = require('express');
var router = express.Router();
var random=(Math.random()).toFixed(2);
var result=0;
router.get('/', function(req, res, next) {

    var abs=Math.abs(random).toFixed(2);
    var acos=Math.acos(random).toFixed(2);
    var sin=Math.sin(random).toFixed(2);
    

    res.render("computation", {
      abs: `Math.abs value of  f(${random}) is ${abs}.`,
      acos: `Math.acos value of f(${random}) is ${acos}.`,
      sin: `Math.sin value of (${random}) is ${sin}.`
    })
  });
    

module.exports=router;


