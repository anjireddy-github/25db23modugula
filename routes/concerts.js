var express = require('express');
const concert_controlers= require('../controllers/concert');
var router = express.Router();

/* GET concerts home page - list all concerts */
router.get('/', concert_controlers.concert_view_all_Page);

/* GET create concert page */
router.get('/create', concert_controlers.concert_create_Page);

/* GET detail page for one concert */
router.get('/detail', concert_controlers.concert_view_one_Page);

/* GET update page for one concert */
router.get('/update', concert_controlers.concert_update_Page);

/* GET delete confirmation page for one concert */
router.get('/delete', concert_controlers.concert_delete_Page);

module.exports = router;
