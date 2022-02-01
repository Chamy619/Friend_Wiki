import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';

const INITIAL_FORM = 'auth/INITIAL_FORM';
const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes('auth/LOGIN');
const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes('auth/REGISTER');
const [OAUTH, OAUTH_SUCCESS, OAUTH_FAILURE] = createRequestActionTypes('auth/OAUTH');

export const initialForm = (form) => ({
  type: INITIAL_FORM,
  payload: form,
});

export const changeField = ({ form, name, value }) => ({
  type: CHANGE_FIELD,
  payload: { form, name, value },
});

export const login = ({ email, password, code }) => ({
  type: LOGIN,
  payload: { email, password, code },
});

export const register = ({ email, username, password }) => ({
  type: REGISTER,
  payload: { email, username, password },
});

export const oauth = ({ code }) => ({
  type: OAUTH,
  payload: { code },
});

const loginSaga = createRequestSaga(LOGIN, authAPI.login);
const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const oauthSaga = createRequestSaga(OAUTH, authAPI.oauth);

export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(OAUTH, oauthSaga);
}

const initialState = {
  login: {
    email: '',
    password: '',
  },
  register: {
    email: '',
    username: '',
    password: '',
    passwordConfirm: '',
  },
  auth: null,
  loginError: null,
  registerError: null,
  oauthError: null,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case INITIAL_FORM:
      return {
        ...state,
        [action.payload]: initialState[action.payload],
        auth: null,
        loginError: null,
        registerError: null,
      };
    case CHANGE_FIELD:
      return {
        ...state,
        [action.payload.form]: { ...state[action.payload.form], [action.payload.name]: action.payload.value },
      };
    case LOGIN_SUCCESS:
      return { ...state, login: { email: '', password: '' }, auth: action.payload, loginError: null };
    case LOGIN_FAILURE:
      return { ...state, auth: null, loginError: action.payload };
    case REGISTER_SUCCESS:
      return { ...state, register: { ...initialState.register }, auth: action.payload, registerError: null };
    case REGISTER_FAILURE:
      return {
        ...state,
        register: { ...state.register, password: '', passwordConfirm: '' },
        auth: null,
        registerError: action.payload,
      };
    case OAUTH_SUCCESS:
      return { ...state, auth: action.payload };
    case OAUTH_FAILURE:
      return { ...state, oauthError: action.payload };
    default: {
      return { ...state };
    }
  }
}
