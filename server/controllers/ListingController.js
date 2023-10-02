const Listing = require('../models/ListingModel')

const addListing = async(req, res) => {
    const {car_model, location, price, production_year, transmission_type, classification_type, total_kms, description, 
        features, vehicle_information, car_photo, car_photo_ref, created_at, userId, user_name, user_photo} = req.body;
    try {
        const listing = await Listing.addlisting(car_model, location, price, production_year, transmission_type, classification_type, 
            total_kms, description, features, vehicle_information, car_photo, car_photo_ref, created_at, userId, user_name, user_photo)
        console.log(listing)
        res.status(200).json({listing, message: "Listing added successfully."})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success: false, message: error.message});
    }
}

const updateListing = async(req, res) => {
    const {car_model, price, production_year, transmission_type, classification_type, total_kms,
        description, features, vehicle_information, car_photo, car_photo_ref, listingId} = req.body;
    try {
        const listing = await Listing.updatelisting(car_model, price, production_year, transmission_type, classification_type, 
            total_kms, description, features, vehicle_information, car_photo, car_photo_ref, listingId)
        console.log(listing)
        res.status(200).json({listing, message: "Listing updated successfully."})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success: false, message: error.message});
    }
}

const deleteListing = async(req, res) => {
    const { listingId } = req.body;
    try {
        const listing = await Listing.deletelisting(listingId)
        console.log(listing)
        res.status(200).json({listing, message: "Listing deleted successfully."})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success: false, message: error.message});
    }
}

const fetchAllListings = async(req, res) => {
    try {
        const listings = await Listing.find({})
        console.log(listings)
        res.status(200).json({listings, message: "Listings fetched successfully."})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success: false, message: error.message});
    }
}

const fetchUserListings = async(req, res) => {
    const { userID } = req.query;
    console.log(userID)
    try {
        const listings = await Listing.find({userId: userID})
        console.log(listings)
        res.status(200).json({listings, message: "Listings fetched successfully."})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success: false, message: error.message});
    }
}

const fetchSellerListings = async(req, res) => {
    const { sellerID } = req.query;
    console.log(sellerID)
    try {
        const listings = await Listing.find({userId: sellerID})
        console.log(listings)
        res.status(200).json({listings, message: "Listings fetched successfully."})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success: false, message: error.message});
    }
}

module.exports = { addListing, updateListing, deleteListing, fetchAllListings, fetchUserListings, fetchSellerListings }