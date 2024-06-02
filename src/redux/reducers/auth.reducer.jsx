/** @format */

import { LOGIN_SUCCESS, LOGOUT } from '../actions/type.actions'

/* Initial state of authentication */
const initialState = {
    status: 'VOID',
    isConnected: false,
    token: null,
    error: null,
}
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                status: 'SUCCEEDED',
                isConnected: true,
                token: action.payload,
                error: null,
            }
        case LOGOUT: {
            return initialState
        }
        default:
            return state
    }
}
