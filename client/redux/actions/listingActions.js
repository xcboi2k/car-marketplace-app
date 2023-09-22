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
            }),
        })
        const data = await response.json();

        // dispatch({
        //     type: OTHERINFO_SUCCESS,
        //     payload: {
        //         _id: data.user._id,
        //         firstName: data.user.firstName,
        //         lastName: data.user.lastName,
        //         userName: data.user.userName,
        //         email: data.user.email,
        //         password: data.user.password,
        //         profile_photo: data.user.profile_photo,
        //         profile_photo_ref: data.user.profile_photo_ref,
        //         shop_name: data.user.shop_name, 
        //         location: data.user.location, 
        //         phone_number: data.user.phone_number, 
        //         bio: data.user.bio, 
        //         about: data.user.about,
        //     },
        // });
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