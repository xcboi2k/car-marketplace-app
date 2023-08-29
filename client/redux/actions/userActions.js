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
    try{
        const response = await fetch("http://192.168.100.24:4000/api/user/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userName: userData.userName,
                email: userData.email,
                password: userData.password,
                profilePhoto: userData.profilePhoto,
            }),
        })
        console.log(response)
        const data = await response.json();
        console.log(data)
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: data.user,
        });
        Alert.alert("Successfully created an account.");
    }
    catch (error){
        console.log(error.message);
    }
};

export const loginAction = (userData) => async (dispatch) => {
    console.log(userData);
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