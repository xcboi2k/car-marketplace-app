const Review = require('../models/ReviewModel')

const addReview = async(req, res) => {
    const {rating, review_description, rated_sellerId, created_at, userId, user_name} = req.body;
    try {
        const review = await Review.addreview(rating, review_description, rated_sellerId, created_at, userId, user_name)
        console.log(review)
        res.status(200).json({review, message: "Review added successfully."})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success: false, message: error.message});
    }
}

const updateReview = async(req, res) => {
    const {rating, review_description, reviewId} = req.body;
    try {
        const review = await Listing.updatereview(rating, review_description, reviewId)
        console.log(review)
        res.status(200).json({review, message: "Review updated successfully."})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success: false, message: error.message});
    }
}

const deleteReview = async(req, res) => {
    const { reviewId } = req.params;
    try {
        const review = await Review.deletereview(reviewId)
        console.log(review)
        res.status(200).json({review, message: "Review deleted successfully."})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success: false, message: error.message});
    }
}

const fetchUserReviews = async(req, res) => {
    const { userID } = req.query;
    console.log(userID)
    try {
        const reviews = await Review.find({userId: userID})
        console.log(reviews)
        res.status(200).json({reviews, message: "Reviews fetched successfully."})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success: false, message: error.message});
    }
}

const fetchSellerReviews = async(req, res) => {
    const { sellerID } = req.query;
    console.log(sellerID)
    try {
        const reviews = await Review.find({rated_sellerId: sellerID})
        console.log(reviews)
        res.status(200).json({reviews, message: "Reviews fetched successfully."})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success: false, message: error.message});
    }
}

module.exports = { addReview, updateReview, deleteReview, fetchUserReviews, fetchSellerReviews }