var Concert = require('../models/concert');

// List of all Concerts
exports.concert_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Concert list');
};

// for a specific Concert.
exports.concert_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Concert detail: ' + req.params.id);
};

// Handle Concert create on POST.
exports.concert_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Concert create POST');
};

// Handle Concert delete from on DELETE.
exports.concert_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Concert delete DELETE ' + req.params.id);
};

// Handle Concert update form on PUT.
exports.concert_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Concert update PUT' + req.params.id);
};
