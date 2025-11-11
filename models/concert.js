const mongoose = require("mongoose")
const concertSchema = mongoose.Schema({
    concert_name: String,
    venue: String,
    ticket_price: Number
})
module.exports = mongoose.model("Concert", concertSchema)
