import { SIGNUP_SUCCESS, LOGIN_SUCCESS, LOGIN_FAILURE, OTHERINFO_SUCCESS, OTHERINFO_FAILURE } from "../actions/userActions";

const initialState = {
    isLoggedIn: false,
    isSignedIn: false,
    userId: '',
    name: '',
    email: '',
    password: '',
    profile_photo: '',
    profile_photo_ref: '',
    shopName: "",
    location: "",
    phoneNumber: "",
    bio: "",
    about: "",
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isSignedIn: true,
                userId: action.payload._id,
                name: action.payload.userName,
                email: action.payload.email,
                password: action.payload.password,
                profile_photo: action.payload.profile_photo,
                profile_photo_ref: action.payload.profile_photo_ref,
                shop_name: action.payload.shop_name, 
                location: action.payload.location, 
                phone_number: action.payload.phone_number, 
                bio: action.payload.bio, 
                about: action.payload.about,
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
                profile_photo_ref: action.payload.profile_photo_ref,
                shop_name: action.payload.shop_name, 
                location: action.payload.location, 
                phone_number: action.payload.phone_number, 
                bio: action.payload.bio, 
                about: action.payload.about,
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
            case OTHERINFO_SUCCESS:
                return {
                    ...state,
                    isLoggedIn: true,
                    userId: action.payload._id,
                    name: action.payload.userName,
                    email: action.payload.email,
                    password: action.payload.password,
                    profile_photo: action.payload.profile_photo,
                    profile_photo_ref: action.payload.profile_photo_ref,
                    shop_name: action.payload.shop_name, 
                    location: action.payload.location, 
                    phone_number: action.payload.phone_number, 
                    bio: action.payload.bio, 
                    about: action.payload.about,
                    error: null,
                };
            case OTHERINFO_FAILURE:
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