import { Alert } from "react-native";

export const ADDLISTING_SUCCESS = 'ADDLISTING_SUCCESS';
export const UPDATELISTING_SUCCESS = 'UPDATELISTING_SUCCESS';
export const DELETELISTING_SUCCESS = 'DELETELISTING_SUCCESS';
export const LISTING_FAILURE = 'LISTING_FAILURE';

export const addListingSuccess = () => ({
    type: ADDLISTING_SUCCESS
});

export const updateListingSuccess = () => ({
    type: UPDATELISTING_SUCCESS
});

export const deleteListingSuccess = () => ({
    type: DELETELISTING_SUCCESS
});

export const listingFailure = () => ({
    type: LISTING_FAILURE
});

export const addListingAction = (newListingData) => async (dispatch) => {
    try{
        
    }catch(error){
        console.log('addListingAction Error:', error.message);
        dispatch(hideLoader());
    }
}

export const updateListingAction = (updateListingData) => async (dispatch) => {
    try{

    }catch(error){
        console.log('updateListingAction Error:', error.message);
        dispatch(hideLoader());
    }
}

export const deleteListingAction = (id) => async (dispatch) => {
    try{

    }catch(error){
        console.log('deleteListingAction Error:', error.message);
        dispatch(hideLoader());
    }
}