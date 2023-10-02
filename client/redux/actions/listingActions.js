import { Alert } from "react-native";
import { deleteObject, ref } from 'firebase/storage';

import { storage } from '../../firebase'
import { hideLoader } from "./loaderActions";

export const ADDLISTING_SUCCESS = 'ADDLISTING_SUCCESS';
export const UPDATELISTING_SUCCESS = 'UPDATELISTING_SUCCESS';
export const DELETELISTING_SUCCESS = 'DELETELISTING_SUCCESS';
export const FETCHLISTINGS_SUCCESS = 'FETCHLISTINGS_SUCCESS';
export const FETCHUSERLISTINGS_SUCCESS = 'FETCHUSERLISTINGS_SUCCESS';
export const FETCHSELLERLISTINGS_SUCCESS = 'FETCHSELLERLISTINGS_SUCCESS';
export const LISTING_FAILURE = 'LISTING_FAILURE';

export const addListingSuccess = (newListing) => ({
    type: ADDLISTING_SUCCESS,
    payload: newListing,
});

export const updateListingSuccess = () => ({
    type: UPDATELISTING_SUCCESS
});

export const deleteListingSuccess = () => ({
    type: DELETELISTING_SUCCESS
});

export const fetchListingsSuccess = (listings) => ({
    type: FETCHLISTINGS_SUCCESS,
    payload: listings,
});

export const fetchUserListingsSuccess = (listings) => ({
    type: FETCHUSERLISTINGS_SUCCESS,
    payload: listings,
});

export const fetchSellerListingsSuccess = (listings) => ({
    type: FETCHSELLERLISTINGS_SUCCESS,
    payload: listings,
});

export const listingFailure = () => ({
    type: LISTING_FAILURE
});

export const addListingAction = (newListingData) => async (dispatch) => {
    console.log('addList:', newListingData)

    try{
        const response = await fetch("http://192.168.100.24:4000/api/listing/addListing", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                car_model: newListingData.carModel,
                location: newListingData.location,
                price: newListingData.price,
                production_year: newListingData.productionYear,
                transmission_type: newListingData.transmissionType,
                classification_type: newListingData.classificationType,
                total_kms: newListingData.totalKMs,
                description: newListingData.description,
                features: newListingData.features,
                vehicle_information: newListingData.vehicleInformation,
                car_photo: newListingData.carPhoto,
                car_photo_ref: newListingData.carPhotoRef,
                created_at: newListingData.createdAt,
                userId: newListingData.userID, 
                user_name: newListingData.userName, 
                user_photo: newListingData.userPhoto
            }),
        })
        const data = await response.json();

        dispatch(addListingSuccess(data));
        dispatch(hideLoader());
        Alert.alert("SUCCESS", "Information added successfully.");
    }
    catch (error){
        dispatch({
            type: LISTING_FAILURE,
        });
        dispatch(hideLoader());
        console.log('addListingAction Error:', error.message);
        Alert.alert("FAILED", "Information added unsuccessful.");
    }
}

export const updateListingAction = (updateListingData) => async (dispatch) => {
    try{
        const response = await fetch("http://192.168.100.24:4000/api/listing/updateListing", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                car_model: updateListingData.carModel,
                price: updateListingData.price,
                production_year: updateListingData.productionYear,
                transmission_type: updateListingData.transmissionType,
                classification_type: updateListingData.classificationType,
                total_kms: updateListingData.totalKMs,
                description: updateListingData.description,
                features: updateListingData.features,
                vehicle_information: updateListingData.vehicleInformation,
                car_photo: updateListingData.carPhoto,
                car_photo_ref: updateListingData.carPhotoRef,
                listingId: updateListingData.listingID,
            }),
        })
        const data = await response.json();
        
        if(data){
            try{
                const response = await fetch(`http://192.168.100.24:4000/api/listing/fetchAllListings`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                const data = await response.json();
        
                dispatch(updateListingSuccess(data.listings));
                dispatch(hideLoader());
                Alert.alert("SUCCESS", "Information updated successfully.");
            }catch(error){
                dispatch({
                    type: LISTING_FAILURE,
                });
                dispatch(hideLoader());
                console.log('updateListingAction Error:', error.message);
                console.log("FAILED", "Updating listing unsuccessful.");
            }
        }
    }catch(error){
        console.log('updateListingAction Error:', error.message);
        dispatch(hideLoader());
    }
}

export const deleteListingAction = (id, fileReference) => async (dispatch) => {
    try{
        const response = await fetch(`http://192.168.100.24:4000/api/listing/deleteListing/listingId=${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json();

        const fileRef = ref(storage, fileReference);
        if (fileReference) {
            await deleteObject(fileRef);
        }

        dispatch(deleteListingSuccess(data));
        dispatch(hideLoader());
        Alert.alert("SUCCESS", "Information added successfully.");
    }catch(error){
        console.log('deleteListingAction Error:', error.message);
        dispatch(hideLoader());
    }
}

export const fetchAllListingsAction = () => async (dispatch) => {
    try{
        const response = await fetch(`http://192.168.100.24:4000/api/listing/fetchAllListings`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json();

        dispatch(fetchListingsSuccess(data.listings));
        dispatch(hideLoader());
        console.log("SUCCESS", "Fetched listings successfully.");
    }catch(error){
        dispatch({
            type: LISTING_FAILURE,
        });
        dispatch(hideLoader());
        console.log('fetchListingsAction Error:', error.message);
        console.log("FAILED", "Fetching listings unsuccessful.");
    }
}

export const fetchUserListingsAction = (userID) => async (dispatch) => {
    console.log(userID)
    try{
        const response = await fetch(`http://192.168.100.24:4000/api/listing/fetchUserListings?userID=${userID}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json();
        dispatch(fetchUserListingsSuccess(data.listings));
        dispatch(hideLoader());
        console.log("SUCCESS", "Fetched user's listings successfully.");
    }catch(error){
        dispatch({
            type: LISTING_FAILURE,
        });
        dispatch(hideLoader());
        console.log('fetchListingsAction Error:', error.message);
        console.log("FAILED", "Fetching listings unsuccessful.");
    }
}

export const fetchSellerListingsAction = (sellerID) => async (dispatch) => {
    try{
        const response = await fetch(`http://192.168.100.24:4000/api/listing/fetchSellerListings?sellerID=${sellerID}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json();
        dispatch(fetchSellerListingsSuccess(data.listings));
        dispatch(hideLoader());
        console.log("SUCCESS", "Fetched seller's listings successfully.");
    }catch(error){
        dispatch({
            type: LISTING_FAILURE,
        });
        dispatch(hideLoader());
        console.log('fetchListingsAction Error:', error.message);
        console.log("FAILED", "Fetching listings unsuccessful.");
    }
}