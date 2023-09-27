import { ADDLISTING_SUCCESS, UPDATELISTING_SUCCESS, DELETELISTING_SUCCESS, FETCHLISTINGS_SUCCESS, LISTING_FAILURE } from "../actions/listingActions";

const initialState = {
    listings: [{ _id: '1', user_name: 'Sakura Motors', location: 'Osaka, Japan' },
        { _id: '2', user_name: 'Gunma Racing', location: 'Gunma Prefecture, Japan' },
        { _id: '3', user_name: 'TopRank', location: 'Tokyo, Japan' },],
};

const listingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDLISTING_SUCCESS:
            return {
                ...state,
                listings: action.payload,
            };
        case UPDATELISTING_SUCCESS:
            return {
                ...state,
                listings: action.payload,
            };
        case DELETELISTING_SUCCESS:
            return {
                ...state,
                listings: action.payload,
            };
        case FETCHLISTINGS_SUCCESS:
            return{
                ...state,
                listings: [...listings, action.payload]
            };
        case LISTING_FAILURE:
            return {
                ...state,
                listings: action.payload,
            };
        default:
            return state;
    }
}

export default listingReducer;