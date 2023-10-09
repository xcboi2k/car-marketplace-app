import { ADDREVIEW_SUCCESS, DELETEREVIEW_SUCCESS, FETCHSELLER_REVIEWS, FETCHUSER_REVIEWS, REVIEW_FAILURE, UPDATEREVIEW_SUCCESS } from "../actions/reviewActions";

const initialState = {
    reviews: [],
    userReviews: [],
    sellerReviews: [],
};

const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDREVIEW_SUCCESS:
            return {
                ...state,
                reviews: action.payload,
            };
        case UPDATEREVIEW_SUCCESS:
            return {
                ...state,
                reviews: action.payload,
            };
        case DELETEREVIEW_SUCCESS:
            return {
                ...state,
                reviews: action.payload,
            };
        case FETCHUSER_REVIEWS:
            return{
                ...state,
                userReviews: action.payload,
            };
        case FETCHSELLER_REVIEWS:
            return{
                ...state,
                sellerReviews: action.payload,
            };
        case REVIEW_FAILURE:
            return {
                ...state,
                reviews: action.payload,
            };
        default:
            return state;
    }
}

export default reviewReducer;