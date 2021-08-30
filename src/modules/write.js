import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as postsAPI from '../lib/api/posts';

const INITIALIZE = 'write/INITIALIZE';
const CLEAR = 'write/CLEAR';
const CHANGE_FIELD = 'write/CHANGE_FIELD';
const SET_ORIGINAL_POST = 'write/SET_ORIGINAL_POST';

const [WRITE_POST, WRITE_POST_SUCCESS, WRITE_POST_FAILURE] = createRequestActionTypes('write/WRITE_POST');
const [UPDATE_POST, UPDATE_POST_SUCCESS, UPDATE_POST_FAILURE] = createRequestActionTypes('write/UPDATE_POST');

export const initialize = (owner) => ({ type: INITIALIZE, payload: owner });
export const clear = () => ({ type: CLEAR });
export const changeField = ({ key, value }) => ({ type: CHANGE_FIELD, payload: { key, value } });
export const setOriginalPost = (post) => ({ type: SET_ORIGINAL_POST, payload: post });

export const writePost = ({ title, body, owner }) => ({ type: WRITE_POST, payload: { title, body, owner } });
export const updatePost = ({ id, title, body, owner }) => ({ type: UPDATE_POST, payload: { id, title, body, owner } });

const writePostSaga = createRequestSaga(WRITE_POST, postsAPI.writePost);
const updatePostSaga = createRequestSaga(UPDATE_POST, postsAPI.updatePost);

export function* writeSaga() {
  yield takeLatest(WRITE_POST, writePostSaga);
  yield takeLatest(UPDATE_POST, updatePostSaga);
}

const initialState = {
  title: '',
  body: '',
  owner: '',
  post: null,
  postError: null,
  originalPostId: null,
};

export default function write(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE:
      return { ...state, owner: action.payload };
    case CLEAR:
      return { ...initialState };
    case CHANGE_FIELD:
      return { ...state, [action.payload.key]: action.payload.value };
    case SET_ORIGINAL_POST:
      return {
        ...state,
        title: action.payload.title,
        body: action.payload.body,
        owner: action.payload.owner,
        originalPostId: action.payload._id,
      };
    case WRITE_POST_SUCCESS:
      return { ...state, post: action.payload };
    case WRITE_POST_FAILURE:
      return { ...state, postError: action.payload };
    case UPDATE_POST_SUCCESS:
      return { ...state, post: action.payload };
    case UPDATE_POST_FAILURE:
      return { ...state, postError: action.payload };
    default:
      return state;
  }
}
