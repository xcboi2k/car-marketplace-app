import { ADDLISTING_SUCCESS, UPDATELISTING_SUCCESS, DELETELISTING_SUCCESS, FETCHLISTINGS_SUCCESS, LISTING_FAILURE } from "../actions/listingActions";

const initialState = {
    listings: [],
};

const listingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDLISTING_SUCCESS:
            return {
                ...state,
                listings: [...state.listings, action.payload],
            };
        case UPDATELISTING_SUCCESS:
            return {
                ...state,
                listings: [...state.listings, action.payload],
            };
        case DELETELISTING_SUCCESS:
            return {
                ...state,
                listings: [...state.listings, action.payload],
            };
        case FETCHLISTINGS_SUCCESS:
            return{
                ...state,
                listings: action.payload,
            };
        case LISTING_FAILURE:
            return {
                ...state,
                listings: [...state.listings, action.payload],
            };
        default:
            return state;
    }
}

export default listingReducer;