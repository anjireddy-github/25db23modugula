const mongoose = require("mongoose")
const concertSchema = mongoose.Schema({
    concert_name: {
        type: String,
        minLength: [3, 'Concert name must be at least 3 characters'],
        maxLength: [100, 'Concert name cannot exceed 100 characters']
    },
    venue: String,
    ticket_price: {
        type: Number,
        min: [10, 'Ticket price must be at least $10'],
        max: [500, 'Ticket price cannot exceed $500']
    }
})
module.exports = mongoose.model("Concert", concertSchema)
