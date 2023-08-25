const mongoose = require('mongoose')

const Schema = mongoose.Schema

const listingSchema = new Schema({
    car_photo:{
        public_id: String,
        url: String,
    },
    price: {
        type: Number,
        required: true
    },
    car_model: {
        type: String,
        required: true
    },
    production_year: {
        type: Number,
        required: true
    },
    transmission_type: {
        type: String,
        required: true
    },
    total_kms: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    features: {
        type: String,
        required: true
    },
    vehicle_information: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    createdAt: Date,
}, { timestamps: true })

module.exports = mongoose.model('Listing', listingSchema)