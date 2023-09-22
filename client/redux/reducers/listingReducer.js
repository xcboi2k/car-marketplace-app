import { ADDLISTING_SUCCESS, UPDATELISTING_SUCCESS, DELETELISTING_SUCCESS, LISTING_FAILURE } from "../actions/listingActions";

const initialState = {
    items: [],
};

const listingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDLISTING_SUCCESS:
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        case UPDATELISTING_SUCCESS:
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        case DELETELISTING_SUCCESS:
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        case LISTING_FAILURE:
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        default:
            return state;
    }
}

export default listingReducer;