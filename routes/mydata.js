var express = require('express');
// var mydata = require('my-data');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Sai Kumar Thangalla Muni Venkata' });
  
});

module.exports = router;
