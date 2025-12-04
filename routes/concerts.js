var express = require('express');
const concert_controlers= require('../controllers/concert');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
// or redirect to login.
const secured = (req, res, next) => {
  if (req.user){
    return next();
  }
  res.redirect("/login");
}

/* GET concerts home page - list all concerts */
router.get('/', concert_controlers.concert_view_all_Page);

/* GET create concert page */
router.get('/create', secured, concert_controlers.concert_create_Page);

/* GET detail page for one concert */
router.get('/detail', concert_controlers.concert_view_one_Page);

/* GET update page for one concert */
router.get('/update', secured, concert_controlers.concert_update_Page);

/* GET delete confirmation page for one concert */
router.get('/delete', secured, concert_controlers.concert_delete_Page);

module.exports = router;
