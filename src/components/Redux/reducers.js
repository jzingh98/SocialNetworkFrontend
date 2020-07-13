import {
    CHANGE_LOGGEDIN,
    CLEAR_PROFILE,
    REQUEST_LOAD_PROFILE_PENDING,
    REQUEST_LOAD_PROFILE_SUCCESS,
    REQUEST_LOAD_PROFILE_FAILED,
    REQUEST_REGISTER_PROFILE_PENDING,
    REQUEST_REGISTER_PROFILE_SUCCESS,
    REQUEST_REGISTER_PROFILE_FAILED,
    REQUEST_EDIT_PROFILE_PENDING,
    REQUEST_EDIT_PROFILE_SUCCESS,
    REQUEST_EDIT_PROFILE_FAILED,

} from './constants';






const initialStateLoggedIn = {
    loggedIn: false
};

export const reducedSetLoggedIn = (state=initialStateLoggedIn, action={}) => {
    switch (action.type) {
        case CHANGE_LOGGEDIN:
            return Object.assign({}, state, {loggedIn: action.payload});
        default:
            return state
    }
};





const initialProfileState = {
    isLoading: false,
    isRegistering: false,
    isEditing: false,
    email: "",
    userName: "",
    firstName: "",
    lastName: "",
    city: "",
    bio: ""
};

export const reducedSetProfile = (state=initialProfileState, action={}) => {
    switch (action.type) {
        // Reset values
        case CLEAR_PROFILE:
            return Object.assign({}, state, initialProfileState);

        // Load profile
        case REQUEST_LOAD_PROFILE_PENDING:
            return Object.assign({}, state, {isLoading: true});
        case REQUEST_LOAD_PROFILE_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                email: action.payload.email,
                userName: action.payload.userName,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                city: action.payload.city,
                bio: action.payload.bio
            });
        case REQUEST_LOAD_PROFILE_FAILED:
            return Object.assign({}, state, {error: action.payload});

        // Register profile
        case REQUEST_REGISTER_PROFILE_PENDING:
            return Object.assign({}, state, {isRegistering: true});
        case REQUEST_REGISTER_PROFILE_SUCCESS:
            return Object.assign({}, state, {
                isRegistering: false,
                email: action.payload.email,
                userName: action.payload.userName,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                city: action.payload.city,
                bio: action.payload.bio
            });
        case REQUEST_REGISTER_PROFILE_FAILED:
            return Object.assign({}, state, {error: action.payload});

        // Edit profile
        case REQUEST_EDIT_PROFILE_PENDING:
            return Object.assign({}, state, {isEditing: true});
        case REQUEST_EDIT_PROFILE_SUCCESS:
            return Object.assign({}, state, {
                isEditing: false,
                userName: action.payload.userName,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                city: action.payload.city,
                bio: action.payload.bio
            });
        case REQUEST_EDIT_PROFILE_FAILED:
            return Object.assign({}, state, {error: action.payload});

        // Default
        default:
            return state
    }
};























