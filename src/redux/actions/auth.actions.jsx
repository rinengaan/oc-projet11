import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from './type.actions'

/* Authentication actions */
export const loginSuccess = (token) => {
    return {
        type: LOGIN_SUCCESS,
        payload: token,
    }
}

export const logout = () => {
    return {
        type: LOGOUT,
    }
}
