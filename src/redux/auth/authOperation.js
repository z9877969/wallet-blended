import axios from 'axios';
import { getError } from '../error/handlerError';
import { getCurrentUserError, getCurrentUserRequest, getCurrentUserSuccess, loginError, loginRequest, loginSuccess, registerError, registerRequest, registerSuccess } from './authAction';

axios.defaults.baseURL = "https://identitytoolkit.googleapis.com/v1/"
const KEY = "AIzaSyCRFI_dZqdUgbia23ytk0ieVoSex3J7HCY";
const path = {
    login: "accounts:signInWithPassword",
    register: "accounts:signUp",
    curUser: "accounts:lookup"
}

export const registerOperation = (data, id, name) => dispatch => {
    dispatch(registerRequest());

    console.log('{...data, returnSecureToken: true} :>> ', {...data, returnSecureToken: true});

    axios.post(path.register + "?" + "key=" + KEY, {...data, returnSecureToken: true})
    .then(({data}) => dispatch(registerSuccess(data)))
    .catch(err => dispatch(getError({
        error: err,
        requestCallback: registerOperation,
        requestData: [data, id, name],
        errorType: "auth/registerError"
    })))
} 

export const loginOperation = data => dispatch => {
    dispatch(loginRequest());

    console.log('{...data, returnSecureToken: true} :>> ', {...data, returnSecureToken: true});

    axios.post(path.login + "?" + "key=" + KEY, {...data, returnSecureToken: true})
    .then(({data}) => dispatch(loginSuccess(data)))
    .catch(err => dispatch(loginError(err)))
} 

export const getCurUserOperation = () => (dispatch, getState) => {
    dispatch(getCurrentUserRequest());

    const {auth: {idToken}} = getState()

    axios.post(path.curUser + "?" + "key=" + KEY, {idToken})
    .then(({data}) => dispatch(getCurrentUserSuccess(data)))
    .catch(err => dispatch(getCurrentUserError(err)))
} 

export const refreshOperation =
  (requestCallback, requestData) => (dispatch, getStore) => {
    dispatch(refreshTokenRequest());

    const {
      auth: { refreshToken },
    } = getStore;

    const data = {
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    };

    axios
      .post(
        "https://securetoken.googleapis.com/v1/token?key=AIzaSyCRFI_dZqdUgbia23ytk0ieVoSex3J7HCY",
        data
      )
      .then((data) =>
        dispatch(
          refreshTokenSuccess({
            idToken: data.id_token,
            refreshToken: data.refresh_token,
            userId: data.user_id,
          })
        )
      )
      .then(() => dispatch(requestCallback(...requestData)))
      .catch((e) => {
        dispatch(refreshTokenError(e.message));
      });
  };