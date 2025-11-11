var express = require('express');
const concert_controlers= require('../controllers/concert');
var router = express.Router();

/* GET concerts */
router.get('/', concert_controlers.concert_view_all_Page );

module.exports = router;
