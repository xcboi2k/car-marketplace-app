import { SIGNUP_SUCCESS, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/userActions";

const initialState = {
    isLoggedIn: false,
    userId: '',
    name: '',
    email: '',
    password: '',
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
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                userId: action.payload._id,
                name: action.payload.userName,
                email: action.payload.email,
                password: action.payload.password,
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