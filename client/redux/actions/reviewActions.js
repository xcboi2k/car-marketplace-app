import { Alert } from "react-native";
import { hideLoader } from "./loaderActions";

export const ADDREVIEW_SUCCESS = 'ADDREVIEW_SUCCESS';
export const UPDATEREVIEW_SUCCESS = 'UPDATEREVIEW_SUCCESS';
export const DELETEREVIEW_SUCCESS = 'DELETEREVIEW_SUCCESS';
export const FETCHUSER_REVIEWS = 'FETCHUSER_REVIEWS';
export const FETCHSELLER_REVIEWS = 'FETCHSELLER_REVIEWS';
export const REVIEW_FAILURE = 'REVIEW_FAILURE';

export const addReviewSuccess = (newReview) => ({
    type: ADDREVIEW_SUCCESS,
    payload: newReview,
});

export const updateReviewSuccess = () => ({
    type: UPDATEREVIEW_SUCCESS,
});

export const deleteReviewSuccess = () => ({
    type: DELETEREVIEW_SUCCESS,
});

export const fetchUserReviews = (reviews) => ({
    type: FETCHUSER_REVIEWS,
    payload: reviews,
});

export const fetchSellerReviews = (reviews) => ({
    type: FETCHSELLER_REVIEWS,
    payload: reviews,
});

export const reviewFailure = () => ({
    type: REVIEW_FAILURE
});

export const addReviewAction = (newReviewData) => async (dispatch) => {
    console.log('addReview:', newReviewData)

    try{
        const response = await fetch("http://192.168.100.24:4000/api/review/addReview", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                rating: newReviewData.rating, 
                review_description: newReviewData.reviewDescription, 
                rated_sellerId: newReviewData.ratedSellerID, 
                created_at: newReviewData.createdAt,
                userId: newReviewData.userID, 
                user_name: newReviewData.userName, 
            }),
        })
        const data = await response.json();

        dispatch(addReviewSuccess(data));
        dispatch(hideLoader());
        Alert.alert("SUCCESS", "Information added successfully.");
    }
    catch (error){
        dispatch({
            type: REVIEW_FAILURE,
        });
        dispatch(hideLoader());
        console.log('addReviewAction Error:', error.message);
        Alert.alert("FAILED", "Information added unsuccessful.");
    }
}

export const updateReviewAction = (updateReviewData) => async (dispatch) => {
    try{
        const response = await fetch("http://192.168.100.24:4000/api/review/updateReview", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                rating: updateReviewData.rating, 
                review_description: updateReviewData.reviewDescription, 
                reviewId: updateReviewData.reviewID
            }),
        })
        console.log('Response Status:', response.status);
        console.log('Response Text:', await response.text());

        dispatch(hideLoader());
        Alert.alert("SUCCESS", "Information updated successfully.");
    }catch(error){
        console.log('updateReviewAction Error:', error.message);
        dispatch(hideLoader());
    }
}

export const deleteReviewAction = (reviewId) => async (dispatch) => {
    console.log('deleteListing', reviewId)
    try{
        const response = await fetch(`http://192.168.100.24:4000/api/review/deleteReview/${reviewId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        console.log('Response Status:', response.status);
        console.log('Response Text:', await response.text());

        dispatch(hideLoader());
        Alert.alert("SUCCESS", "Information deleted successfully.");
    }catch(error){
        console.log('deleteReviewAction Error:', error.message);
        dispatch(hideLoader());
    }
}

export const fetchUserReviewsAction = (userID) => async (dispatch) => {
    console.log(userID)
    try{
        const response = await fetch(`http://192.168.100.24:4000/api/review/fetchUserReviews?userID=${userID}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json();
        dispatch(fetchUserReviews(data.reviews));
        dispatch(hideLoader());
        console.log("SUCCESS", "Fetched user's reviews successfully.");
    }catch(error){
        dispatch({
            type: REVIEW_FAILURE,
        });
        dispatch(hideLoader());
        console.log('fetchReviewsAction Error:', error.message);
        console.log("FAILED", "Fetching reviews unsuccessful.");
    }
}

export const fetchSellerReviewsAction = (sellerID) => async (dispatch) => {
    try{
        const response = await fetch(`http://192.168.100.24:4000/api/review/fetchSellerReviews?sellerID=${sellerID}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json();
        dispatch(fetchSellerReviews(data.reviews));
        dispatch(hideLoader());
        console.log("SUCCESS", "Fetched seller's reviews successfully.");
    }catch(error){
        dispatch({
            type: REVIEW_FAILURE,
        });
        dispatch(hideLoader());
        console.log('fetchReviewsAction Error:', error.message);
        console.log("FAILED", "Fetching reviews unsuccessful.");
    }
}