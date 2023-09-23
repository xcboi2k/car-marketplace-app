import { Alert } from "react-native";

export const ADDLISTING_SUCCESS = 'ADDLISTING_SUCCESS';
export const UPDATELISTING_SUCCESS = 'UPDATELISTING_SUCCESS';
export const DELETELISTING_SUCCESS = 'DELETELISTING_SUCCESS';
export const FETCHLISTINGS_SUCCESS = 'FETCHLISTINGS_SUCCESS';
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

export const listingFailure = () => ({
    type: LISTING_FAILURE
});

export const addListingAction = (newListingData) => async (dispatch) => {
    console.log('addList:', newListingData)

    try{
        // for otherInfos
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
                total_kms: newListingData.totalKMs,
                description: newListingData.description,
                features: newListingData.features,
                vehicle_information: newListingData.vehicleInformation,
                car_photo: newListingData.carPhoto,
                car_photo_ref: newListingData.carPhotoRef,
                created_at: newListingData.createdAt,
                userId: newListingData.userId, 
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

export const fetchAllListingsAction = () => async (dispatch) => {
    try{
        const response = await fetch(`http://192.168.100.24:4000/api/listing/fetchAllListings`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json();

        dispatch(fetchListingsSuccess(data));
        dispatch(hideLoader());
        Alert.alert("SUCCESS", "Fetched listings successfully.");
    }catch(error){
        dispatch({
            type: LISTING_FAILURE,
        });
        dispatch(hideLoader());
        console.log('fetchListingsAction Error:', error.message);
        Alert.alert("FAILED", "Fetching listings unsuccessful.");
    }
}

export const fetchUserListingsAction = (userId) => async (dispatch) => {
    try{
        const response = await fetch(`http://192.168.100.24:4000/api/listing/fetchUserListings?userId=${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json();

        dispatch(fetchListingsSuccess(data));
        dispatch(hideLoader());
        Alert.alert("SUCCESS", "Fetched user's listings successfully.");
    }catch(error){
        dispatch({
            type: LISTING_FAILURE,
        });
        dispatch(hideLoader());
        console.log('fetchListingsAction Error:', error.message);
        Alert.alert("FAILED", "Fetching listings unsuccessful.");
    }
}