import { SIGNUP_SUCCESS } from "../actions/userActions";

const initialState = {
    isLoggedIn: false,
    username: '',
    email: '',
    password: '',
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_SUCCESS:
            return {
            ...state,
            isLoggedIn: true,
            username: action.payload.username,
            email: action.payload.password,
            };
        default:
            return state;
    }
};

export default userReducer;