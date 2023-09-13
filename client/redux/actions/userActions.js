import { Alert } from "react-native";

export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

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

export const signupAction = (userData) => async (dispatch) => {
    console.log('frontend',userData.profilePhoto)

    //initialize data for image to upload
    const photoData = new FormData();
    photoData.append('profileImage', {
        name: userData.userName + '/' + userData.profilePhoto,
        uri: userData.profilePhoto,
        type: 'image.jpg'
    })

    try{
        // for signup
        const response = await fetch("http://192.168.100.24:4000/api/user/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userName: userData.userName,
                email: userData.email,
                password: userData.password,
            }),
        })
        const data = await response.json();

        // checks if data is present
        // if (data.user._id) {
        //     // for upload image

        //     const id = data.user._id
        //     console.log('frontend:', id)
        //     try{
        //         const response = await fetch(`http://192.168.100.24:4000/api/user/uploadPhoto/${id}`, {
        //         method: 'POST',
        //         headers: {
        //             Accept: 'application/json',
        //             'Content-Type': 'multipart/form-data',
        //         },
        //         body: photoData,
        //         })

        //         const imgUploadResult = await response.json();  
        //         console.log("Success:", imgUploadResult);
        //         Alert.alert("Successfully created an account.", "Information had been saved. Profile Image uploaded.");
        //     }
        //     catch(error){
        //         console.log("Failed:", error);
        //         Alert.alert("Image upload failed.", "Profile Image not uploaded.");
        //     }
            

            // dispatch({
            //     type: SIGNUP_SUCCESS,
            //     payload: data.user,
            // });

            
        // } else {
        //     // Handle the case where user or _id is not present in the response
        //     console.log('Invalid response from server:', data);
        // }
    }
    catch (error){
        console.log('userActions Error:', error.message);
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
        dispatch({
            type: LOGIN_SUCCESS,
            payload: {
                _id: data.user._id,
                userName: data.user.userName,
                email: data.user.email,
                password: data.user.password,
            },
        });
        Alert.alert("Login Successful.");
    } catch (error) {
        dispatch({
            type: LOGIN_FAILURE,
            payload: error,
        });
        console.log(error)
        Alert.alert("Login Unsuccessful.");
    }
};