import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as postsAPI from '../lib/api/posts';

const INITIALIZE = 'write/INITIALIZE';
const CHANGE_FIELD = 'write/CHANGE_FIELD';

const [WRITE_POST, WRITE_POST_SUCCESS, WRITE_POST_FAILURE] = createRequestActionTypes('write/WRITE_POST');

export const initialize = (owner) => ({ type: INITIALIZE, payload: owner });
export const changeField = ({ key, value }) => ({ type: CHANGE_FIELD, payload: { key, value } });

export const writePost = ({ title, body, owner }) => ({ type: WRITE_POST, payload: { title, body, owner } });

const writePostSaga = createRequestSaga(WRITE_POST, postsAPI.writePost);

export function* writeSaga() {
  yield takeLatest(WRITE_POST, writePostSaga);
}

const initialState = {
  title: '',
  body: '',
  owner: '',
  post: null,
  postError: null,
};

export default function write(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE:
      return { ...state, owner: action.payload };
    case CHANGE_FIELD:
      return { ...state, [action.payload.key]: action.payload.value };
    case WRITE_POST_SUCCESS:
      return { ...state, post: action.payload };
    case WRITE_POST_FAILURE:
      return { ...state, postError: action.payload };
    default:
      return state;
  }
}
