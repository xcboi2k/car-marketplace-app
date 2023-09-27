import { Alert } from "react-native";
import { useDispatch, useSelector } from 'react-redux';

import { hideLoader } from "./loaderActions";

export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const OTHERINFO_SUCCESS = 'OTHERINFO_SUCCESS';
export const OTHERINFO_FAILURE = 'OTHERINFO_FAILURE';
export const UPDATEPHOTO_SUCCESS = 'UPDATEPHOTO_SUCCESS';
export const UPDATEPHOTO_FAILURE = 'UPDATEPHOTO_FAILURE';
export const UPDATEINFO_SUCCESS = 'UPDATEINFO_SUCCESS';
export const UPDATEINFO_FAILURE = 'UPDATEINFO_FAILURE';
export const FETCHUSERS_SUCCESS = 'FETCHUSERS_SUCCESS';

export const signupSuccess = (user) => ({
    type: SIGNUP_SUCCESS,
    payload: user,
});

export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user,
});

export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error,
});

export const otherInfoSuccess = (user) => ({
    type: OTHERINFO_SUCCESS,
    payload: user,
});

export const otherInfoFailure = (error) => ({
    type: OTHERINFO_FAILURE,
    payload: error,
});

export const updatePhotoSuccess = (user) => ({
    type: UPDATEPHOTO_SUCCESS,
    payload: user,
});

export const updatePhotoFailure = (user) => ({
    type: UPDATEPHOTO_FAILURE,
    payload: user,
});

export const updateInfoSuccess = (user) => ({
    type: UPDATEINFO_SUCCESS,
    payload: user,
});

export const updateInfoFailure = (user) => ({
    type: UPDATEINFO_FAILURE,
    payload: user,
});

export const fetchUsersSuccess = (users) => ({
    type: FETCHUSERS_SUCCESS,
    payload: users,
});

export const signupAction = (userData) => async (dispatch) => {
    console.log('frontend', userData)

    try{
        // for signup
        const response = await fetch("http://192.168.100.24:4000/api/user/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName: userData.firstName,
                lastName: userData.lastName,
                userName: userData.userName,
                email: userData.email,
                password: userData.password,
                profile_photo: userData.profilePhoto,
                profile_photo_ref: userData.profilePhotoRef,
            }),
        })
        const data = await response.json();

        // checks if data is present
        if (data.user._id) {
            dispatch({
                type: SIGNUP_SUCCESS,
                payload: data.user,
            });
            dispatch(hideLoader());
            Alert.alert("SUCCESS", "User created successfully.");
        } else {
            // Handle the case where user or _id is not present in the response
            console.log('Invalid response from server:', data);
            dispatch(hideLoader());
        }
    }
    catch (error){
        console.log('userActions Error:', error.message);
        dispatch(hideLoader());
    }
};

export const otherInfoAction = (userData) => async (dispatch) => {
    console.log('otherInfo', userData)

    try{
        // for otherInfos
        const response = await fetch("http://192.168.100.24:4000/api/user/otherinfo", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                shop_name: userData.shopName, 
                location: userData.location,
                phone_number: userData.phoneNumber,
                bio: userData.bio,
                about: userData.about,
                id: userData.id
            }),
        })
        const data = await response.json();

        dispatch({
            type: OTHERINFO_SUCCESS,
            payload: {
                _id: data.user._id,
                firstName: data.user.firstName,
                lastName: data.user.lastName,
                userName: data.user.userName,
                email: data.user.email,
                password: data.user.password,
                profile_photo: data.user.profile_photo,
                profile_photo_ref: data.user.profile_photo_ref,
                shop_name: data.user.shop_name, 
                location: data.user.location, 
                phone_number: data.user.phone_number, 
                bio: data.user.bio, 
                about: data.user.about,
            },
        });
        dispatch(hideLoader());
        Alert.alert("SUCCESS", "Information added successfully.");
    }
    catch (error){
        dispatch({
            type: OTHERINFO_FAILURE,
            payload: error,
        });
        dispatch(hideLoader());
        console.log('userActions Error:', error.message);
        Alert.alert("FAILED", "Information added unsuccessful.");
    }
};

export const loginAction = (userData) => async (dispatch) => {
    try {
      // Perform API call to authenticate user
        const response = await fetch("http://192.168.100.24:4000/api/user/login", {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                loginEmail: userData.email,
                loginPassword: userData.password, }),
        });
    
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
        }

        const data = await response.json();
        console.log(data)
        if (data.user._id) {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {
                    _id: data.user._id,
                    firstName: data.user.firstName,
                    lastName: data.user.lastName,
                    userName: data.user.userName,
                    email: data.user.email,
                    password: data.user.password,
                    profile_photo: data.user.profile_photo,
                    profile_photo_ref: data.user.profile_photo_ref,
                    shop_name: data.user.shop_name, 
                    location: data.user.location, 
                    phone_number: data.user.phone_number, 
                    bio: data.user.bio, 
                    about: data.user.about,
                },
            });
            Alert.alert("SUCCESS", "Login successfully.");
            dispatch(hideLoader());
        }
    } catch (error) {
        dispatch({
            type: LOGIN_FAILURE,
            payload: error,
        });
        dispatch(hideLoader());
        console.log(error)
        Alert.alert("FAILED", "Login unsuccessful.");
    }
};

export const updatePhotoAction = (imgData) => async (dispatch) => {
    try{
        // for updatePhoto
        const response = await fetch("http://192.168.100.24:4000/api/user/updatePhoto", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                profile_photo: imgData.profilePhoto,
                profile_photo_ref: imgData.profilePhotoRef,
                id: imgData.id
            }),
        })
        const data = await response.json();

        // checks if data is present
        if (data.user._id) {
            dispatch({
                type: UPDATEPHOTO_SUCCESS,
                payload: data.user,
            });
            dispatch(hideLoader());
            Alert.alert("SUCCESS", "User created successfully.");
        } else {
            // Handle the case where user or _id is not present in the response
            console.log('Invalid response from server:', data);
            dispatch(hideLoader());
        }
    }catch(error){
        dispatch({
            type: UPDATEPHOTO_FAILURE,
            payload: error,
        });

        dispatch(hideLoader());
        console.log(error)
        Alert.alert("FAILED", "Update photo unsuccessful.");
    }
};

export const updateInfoAction = (updateData) => async (dispatch) => {
    try{
        // for updatePhoto
        const response = await fetch("http://192.168.100.24:4000/api/user/updateInfo", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName: updateData.firstName,
                lastName: updateData.lastName,
                userName: updateData.userName,
                email: updateData.email,
                shop_name: updateData.shopName, 
                location: updateData.location,
                phone_number: updateData.phoneNumber,
                bio: updateData.bio,
                about: updateData.about,
                id: updateData.id
            }),
        })
        const data = await response.json();

        // checks if data is present
        if (data.user._id) {
            dispatch({
                type: UPDATEINFO_SUCCESS,
                payload: data.user,
            });
            dispatch(hideLoader());
            Alert.alert("SUCCESS", "User information updated successfully.");
        } else {
            // Handle the case where user or _id is not present in the response
            console.log('Invalid response from server:', data);
            dispatch(hideLoader());
        }
    }catch(error){
        dispatch({
            type: UPDATEINFO_FAILURE,
            payload: error,
        });

        dispatch(hideLoader());
        console.log(error)
        Alert.alert("FAILED", "User information update unsuccessful.");
    }
};

export const fetchUsersAction = () => async (dispatch) => {
    try{
        const response = await fetch(`http://192.168.100.24:4000/api/user/fetchAllUsers`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json();

        dispatch(fetchUsersSuccess(data));
        dispatch(hideLoader());
        console.log("SUCCESS", "Fetched users successfully.");
    }catch(error){;
        dispatch(hideLoader());
        console.log('fetchUsersAction Error:', error.message);
        console.log("FAILED", "Fetching users unsuccessful.");
    }
};