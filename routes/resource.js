var express = require('express');
var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var concert_controller = require('../controllers/concert');

/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);

/// CONCERT ROUTES ///
// POST request for creating a Concert.
router.post('/concerts', concert_controller.concert_create_post);

// DELETE request to delete Concert.
router.delete('/concerts/:id', concert_controller.concert_delete);

// PUT request to update Concert.
router.put('/concerts/:id', concert_controller.concert_update_put);

// GET request for one Concert.
router.get('/concerts/:id', concert_controller.concert_detail);

// GET request for list of all Concert items.
router.get('/concerts', concert_controller.concert_list);

module.exports = router;
