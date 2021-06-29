import {createReducer} from '@reduxjs/toolkit';
import { getCurrentUserSuccess, loginSuccess, logOutAction, registerSuccess } from './authAction';

const initialState = {
    email: "",
    idToken: "",
    isAuth: false
}

export const authReducer = createReducer(initialState, {
    [loginSuccess]: (_, {payload}) => ({
        email: payload.email,
        idToken: payload.idToken,
        isAuth: true,
        userId: payload.userId
    }),
    [registerSuccess]: (_, {payload}) => ({
        email: payload.email,
        idToken: payload.idToken,
        isAuth: true,
        userId: payload.userId
    }),
    [getCurrentUserSuccess]: (state, {payload: {users: [user]}}) => ({
        ...state,
        email: user.email,
        isAuth: true,
        userId: user.localId
    }),
    [logOutAction]: () => initialState
})