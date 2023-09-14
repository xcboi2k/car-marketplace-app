import { SIGNUP_SUCCESS, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/userActions";

const initialState = {
    isLoggedIn: false,
    userId: '',
    name: '',
    email: '',
    password: '',
    profile_photo: '',
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                userId: action.payload._id,
                name: action.payload.userName,
                email: action.payload.email,
                password: action.payload.password,
                profile_photo: action.payload.profile_photo,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                userId: action.payload._id,
                name: action.payload.userName,
                email: action.payload.email,
                password: action.payload.password,
                profile_photo: action.payload.profile_photo,
                error: null,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoggedIn: false,
                name: '',
                email: '',
                password: '',
                error: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;