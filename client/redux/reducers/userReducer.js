import { SIGNUP_SUCCESS } from "../actions/userActions";

const initialState = {
    isLoggedIn: false,
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
            name: action.payload.name,
            email: action.payload.email,
            password: action.payload.password,
            };
        default:
            return state;
    }
};

export default userReducer;