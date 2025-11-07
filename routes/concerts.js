var express = require('express');
var router = express.Router();

/* GET concerts page. */
router.get('/', function(req, res, next) {
  res.render('concerts', { title: 'Search Results Concerts' });
});

module.exports = router;
