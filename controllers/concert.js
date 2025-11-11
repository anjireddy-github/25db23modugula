var Concert = require('../models/concert');

// List of all Concerts
exports.concert_list = async function(req, res) {
    try{
        theConcerts = await Concert.find();
        res.send(theConcerts);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.concert_view_all_Page = async function(req, res) {
    try{
        theConcerts = await Concert.find();
        res.render('concerts', { title: 'Concert Search Results', results: theConcerts });
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific Concert.
exports.concert_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Concert detail: ' + req.params.id);
};

// Handle Concert create on POST.
exports.concert_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Concert();

    document.concert_name = req.body.concert_name;
    document.venue = req.body.venue;
    document.ticket_price = req.body.ticket_price;
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Concert delete from on DELETE.
exports.concert_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Concert delete DELETE ' + req.params.id);
};

// Handle Concert update form on PUT.
exports.concert_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Concert update PUT' + req.params.id);
};
