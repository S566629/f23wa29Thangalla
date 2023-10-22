var express = require("express");
var router = express.Router();

 

/* GET computation page. */
router.get("/", function (req, res, next) {
  let x = req.query.x;
  let randVal = Math.random().toFixed(2);
  let abs = Math.abs(randVal).toFixed(2);
  let acos = Math.acos(randVal).toFixed(2);
  let sin = Math.sin(randVal).toFixed(2);
  if (x == undefined) {
    x = randVal;
  }
  res.render("computation", {
    abs: `Math.abs() applied to  ${x} is ${abs}`,
    acos: `Math.acos() applied to  ${x} is ${acos}`,
    sin: `Math.sin() applied to  ${x} is ${sin}`,
  });
});

 

module.exports = router;


