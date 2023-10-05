const mongoose = require('mongoose')

const Schema = mongoose.Schema

const reviewSchema = new Schema({
    rating: {
        type: Number,
        required: true
    },
    review_description: {
        type: String,
        required: true
    },
    rated_sellerId:{
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
})

reviewSchema.statics.addreview = async function(rating, review_description, rated_sellerId, created_at, userId, user_name){
        try{
            const review = await this.create({ rating, review_description, rated_sellerId, created_at, userId, user_name })
            
            return review
        }
        catch(error){
            console.log('Error adding review:', error);
            throw new Error('Failed to add review');
        }
}

reviewSchema.statics.updatereview = async function(rating, review_description, reviewId){
    try{
        const review = await this.findById(reviewId);
        if (!review) {
            throw new Error('Review not found');
        }
        
        review.rating = rating
        review.review_description = review_description

        const updatedReview = await review.save();
        return updatedReview
    }
    catch(error){
        console.log('Error updating review:', error);
        throw new Error('Failed to update review');
    }
}

reviewSchema.statics.deletereview = async function(reviewId){
    try{
        const review = await this.findByIdAndDelete(reviewId);
        if (!review) {
            throw new Error('Review not found');
        }
        
        console.log('Deleted review:', review);

    }
    catch(error){
        console.log('Error deleting review:', error);
        throw new Error('Failed to delete review');
    }
}