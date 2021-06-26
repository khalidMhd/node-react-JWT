const { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL, 
        USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS, USER_SIGNUP_FAIL, 
        ADMIN_SIGNIN_REQUEST, ADMIN_SIGNIN_SUCCESS, ADMIN_SIGNIN_FAIL, USER_LOGOUT, RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAIL, NEW_PASSWORD_REQUEST, NEW_PASSWORD_SUCCESS, NEW_PASSWORD_FAIL } = require("../constants/auth");

function signinReducer(state = {},action){
    switch(action.type){
        case USER_SIGNIN_REQUEST:
            return {loading:true, success: false}
        case USER_SIGNIN_SUCCESS:
            return {loading:false, success: true, userInfo:action.payload}
        case USER_SIGNIN_FAIL:
            return { loading: false,success: false, error: action.payload };
        case USER_LOGOUT:
            return {};
        default: return state;
        }
}

function admnSigninReducer(state = {},action){
    switch(action.type){
        case ADMIN_SIGNIN_REQUEST:
            return {loading:true}
        case ADMIN_SIGNIN_SUCCESS:
            return {loading:false, userInfo:action.payload}
        case ADMIN_SIGNIN_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
        }
}

function signupReducer(state={}, action){
    switch(action.type){
        case USER_SIGNUP_REQUEST:
            return {loading: true}
        case USER_SIGNUP_SUCCESS:
            return {loading:false, userInfo:action.payload}
        case USER_SIGNUP_FAIL:
            return {loading:false, error:action.payload}
        default: return state
    }
}

function resetPasswordReducer(state={}, action){
    switch(action.type){
        case RESET_PASSWORD_REQUEST:
            return {loading: true}
        case RESET_PASSWORD_SUCCESS:
            return {loading:false, success:true}
        case RESET_PASSWORD_FAIL:
            return {loading:false, error:action.payload}
        default: return state
    }
}

function newPasswordReducer(state={}, action){
    switch(action.type){
        case NEW_PASSWORD_REQUEST:
            return {loading: true}
        case NEW_PASSWORD_SUCCESS:
            return {loading:false, success:true}
        case NEW_PASSWORD_FAIL:
            return {loading:false, error:action.payload}
        default: return state
    }
}

export {signinReducer,signupReducer, admnSigninReducer, resetPasswordReducer, newPasswordReducer}