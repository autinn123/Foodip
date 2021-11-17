var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('menu/index')
});
router.get('/detail', function(req, res, next) {
  res.render('menu/detail');
});





module.exports = router;