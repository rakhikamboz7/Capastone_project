const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    images: [String],
    location: {
        city: {
            type: String,
            required: true
        },
        address: String
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    amenities: [String],
    description: String,
    rooms: [{
        type: {
            type: String,
            enum: ['Standard', 'Deluxe', 'Suite'],
            required: true
        },
        capacity: {
            type: Number,
            required: true
        },
        price: Number,
        available: {
            type: Boolean,
            default: true
        }
    }],
    bookings: [{
        roomId: mongoose.Schema.Types.ObjectId,
        checkIn: Date,
        checkOut: Date,
        numberOfGuests: Number,
        numberOfRooms: Number
    }]
});

module.exports = mongoose.model('Hotel', hotelSchema);




