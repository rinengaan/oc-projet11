/** @format */

import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit'
import { authReducer } from './reducers/auth.reducer.jsx'

export const initialState = {
    status: 'VOID',
    isConnected: false,
    user: {
        firstname: '',
        lastname: '',
        username: '',
    },
    token: '',
    error: null,
}

const rootReducer = combineReducers({
    auth: authReducer,
})

const store = configureStore({
    reducer: rootReducer,
    devTools: true,
})

export default store
