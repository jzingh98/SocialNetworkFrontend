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

} from './constants'




export const actionSetLoggedIn = (bool) => ({ type: CHANGE_LOGGEDIN, payload: bool });





export const actionClearProfile = () => ({ type: CLEAR_PROFILE, payload: {} });


export const requestLoadProfile = (email, password) => (dispatch) => {
    dispatch({ type: REQUEST_LOAD_PROFILE_PENDING });

    fetch('http://192.168.99.100:3001/signin', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
        .then(response => response.json())
        .then(data => {
            if (data.id) {
                dispatch({ type: REQUEST_LOAD_PROFILE_SUCCESS, payload: data });
            } else {
                dispatch({ type: REQUEST_LOAD_PROFILE_FAILED, payload: data })
            }
        })
        .catch(error => dispatch({ type: REQUEST_LOAD_PROFILE_FAILED, payload: error }))
};


export const requestRegisterProfile = (profileInfo) => (dispatch) => {
    dispatch({ type: REQUEST_REGISTER_PROFILE_PENDING });

    fetch('http://192.168.99.100:3001/register', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: profileInfo.email,
            password: profileInfo.password,
            userName: profileInfo.userName,
            firstName: profileInfo.firstName,
            lastName: profileInfo.lastName,
            city: profileInfo.city,
            bio: profileInfo.bio,
        })
    })
        .then(response => response.json())
        .then(data => {
            if (data.id) {
                dispatch({ type: REQUEST_REGISTER_PROFILE_SUCCESS, payload: data });
            } else {
                dispatch({ type: REQUEST_REGISTER_PROFILE_FAILED, payload: data })
            }
        })
        .catch(error => dispatch({ type: REQUEST_REGISTER_PROFILE_FAILED, payload: error }))
};


export const requestEditProfile = (profileInfo) => (dispatch) => {
    dispatch({ type: REQUEST_EDIT_PROFILE_PENDING });

    fetch('http://192.168.99.100:3001/editprofile', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: profileInfo.email,
            userName: profileInfo.userName,
            firstName: profileInfo.firstName,
            lastName: profileInfo.lastName,
            city: profileInfo.city,
            bio: profileInfo.bio,
        })
    })
        .then(response => response.json())
        .then(data => {
            if (data.id) {
                dispatch({ type: REQUEST_EDIT_PROFILE_SUCCESS, payload: data });
            } else {
                dispatch({ type: REQUEST_EDIT_PROFILE_FAILED, payload: data })
            }
        })
        .catch(error => dispatch({ type: REQUEST_EDIT_PROFILE_FAILED, payload: error }))
};


