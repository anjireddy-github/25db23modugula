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

// Handle a show one view with id specified by query
exports.concert_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
        result = await Concert.findById(req.query.id)
        res.render('concertdetail-inspect', { title: 'Concert Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a concert.
exports.concert_create_Page = function(req, res) {
    console.log("create view")
    try{
        res.render('concertcreate', { title: 'Create New Concert'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a concert.
exports.concert_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await Concert.findById(req.query.id)
        res.render('concertupdate', { title: 'Update Concert', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.concert_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
        result = await Concert.findById(req.query.id)
        res.render('concertdelete', { title: 'Delete Concert', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// for a specific Concert.
exports.concert_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Concert.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
exports.concert_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Concert.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle Concert update form on PUT.
exports.concert_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Concert.findById( req.params.id)
        // Do updates of properties
        if(req.body.concert_name)
            toUpdate.concert_name = req.body.concert_name;
        if(req.body.venue) toUpdate.venue = req.body.venue;
        if(req.body.ticket_price) toUpdate.ticket_price = req.body.ticket_price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};
