const Listing = require('../models/ListingModel')

const addListing = async(req, res) => {
    const {car_model, location, price, production_year, transmission_type, total_kms,
        description, features, vehicle_information, car_photo, car_photo_ref, listingId} = req.body;
    try {
        const listing = await Listing.addlisting(car_model, location, price, production_year, transmission_type, total_kms,
            description, features, vehicle_information, car_photo, car_photo_ref, listingId)
        console.log(listing)
        res.status(200).json({listing, message: "Listing added successfully."})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success: false, message: error.message});
    }
}

const updateListing = async(req, res) => {
    const {car_model, location, price, production_year, transmission_type, total_kms,
        description, features, vehicle_information, car_photo, car_photo_ref, listingId} = req.body;
    try {
        const listing = await Listing.updatelisting(car_model, location, price, production_year, transmission_type, total_kms,
            description, features, vehicle_information, car_photo, car_photo_ref, createdAt, userId)
        console.log(listing)
        res.status(200).json({listing, message: "Listing updated successfully."})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success: false, message: error.message});
    }
}

const deleteListing = async(req, res) => {
    const {listingId} = req.body;
    try {
        const listing = await Listing.deletelisting(listingId)
        console.log(listing)
        res.status(200).json({listing, message: "Listing deleted successfully."})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success: false, message: error.message});
    }
}

module.exports = { addListing, updateListing, deleteListing }