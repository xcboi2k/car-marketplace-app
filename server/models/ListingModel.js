const mongoose = require('mongoose')

const Schema = mongoose.Schema

const listingSchema = new Schema({
    car_model: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    price: {
        type: Number,
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
    },
    features: {
        type: String,
    },
    vehicle_information: {
        type: String,
    },
    car_photo:{
        type: String,
    },
    car_photo_ref:{
        type: String,
    },
    created_at: {
        type: String,
    },
    userId:{
        type: String,
    },
    user_name:{
        type: String,
    },
    user_photo:{
        type: String,
    }
}, { timestamps: true })

listingSchema.statics.addlisting = async function(car_model, location, price, production_year, transmission_type, total_kms,
    description, features, vehicle_information, car_photo, car_photo_ref, created_at, userId, user_name, user_photo){
        try{
            const listing = await this.create({ car_model, location, price, production_year, transmission_type, total_kms,
                description, features, vehicle_information, car_photo, car_photo_ref, created_at, userId, user_name, user_photo})
            
            return listing
        }
        catch(error){
            console.log(error);
        }
}

listingSchema.statics.updatelisting = async function(car_model, location, price, production_year, transmission_type, total_kms,
    description, features, vehicle_information, car_photo, car_photo_ref, listingId){
        try{
            const listing = await this.findById(listingId);
            if (!listing) {
                throw new Error('Listing not found');
            }
            
            listing.car_model = car_model;
            listing.location = location;
            listing.price = price;
            listing.production_year = production_year;
            listing.transmission_type = transmission_type;
            listing.total_kms = total_kms;
            listing.description = description;
            listing.features = features;
            listing.vehicle_information = vehicle_information;
            listing.car_photo = car_photo;
            listing.car_photo_ref = car_photo_ref;

            const updatedListing = await listing.save();
            return updatedListing
        }
        catch(error){
            console.log(error);
        }
}

listingSchema.statics.deletelisting = async function(listingId){
        try{
            const listing = await this.findById(listingId);
            if (!listing) {
                throw new Error('Listing not found');
            }
            
            await listing.deleteOne();

        }
        catch(error){
            console.log('Error deleting listing:', error);
            throw new Error('Failed to delete listing');
        }
}

module.exports = mongoose.model('Listing', listingSchema)