import { SIGNUP_SUCCESS, LOGIN_SUCCESS, LOGIN_FAILURE, OTHERINFO_SUCCESS, OTHERINFO_FAILURE, 
    UPDATEPHOTO_SUCCESS, UPDATEPHOTO_FAILURE, UPDATEINFO_SUCCESS, UPDATEINFO_FAILURE } from "../actions/userActions";

const initialState = {
    isLoggedIn: false,
    isSignedIn: true,
    userId: '',
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    profile_photo: '',
    profile_photo_ref: '',
    shop_name: "",
    location: "",
    phone_number: "",
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
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                userName: action.payload.userName,
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
                isSignedIn: true,
                userId: action.payload._id,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                userName: action.payload.userName,
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
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                userName: action.payload.userName,
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
                userId: '',
                firstName: '',
                lastName: '',
                name: '',
                email: '',
                password: '',
                error: action.payload,
            };
        case UPDATEPHOTO_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                userId: action.payload._id,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                userName: action.payload.userName,
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
        case UPDATEPHOTO_FAILURE:
            return {
                ...state,
                isLoggedIn: true,
                userId: action.payload._id,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                userName: action.payload.userName,
                email: action.payload.email,
                password: action.payload.password,
                profile_photo: '',
                profile_photo_ref: '',
                shop_name: action.payload.shop_name, 
                location: action.payload.location, 
                phone_number: action.payload.phone_number, 
                bio: action.payload.bio, 
                about: action.payload.about,
                error: null,
            };
        case UPDATEINFO_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                userId: action.payload._id,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                userName: action.payload.userName,
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
        case UPDATEINFO_FAILURE:
            return {
                ...state,
                isLoggedIn: true,
                userId: action.payload._id,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                userName: action.payload.userName,
                email: action.payload.email,
                password: action.payload.password,
                profile_photo: '',
                profile_photo_ref: '',
                shop_name: action.payload.shop_name, 
                location: action.payload.location, 
                phone_number: action.payload.phone_number, 
                bio: action.payload.bio, 
                about: action.payload.about,
                error: null,
            };
        default:
            return state;
    }
};

export default userReducer;