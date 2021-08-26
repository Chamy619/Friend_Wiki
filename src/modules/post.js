import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as postsAPI from '../lib/api/posts';

const [READ_POST, READ_POST_SUCCESS, READ_POST_FAILURE] = createRequestActionTypes('post/READ_POST');
const UNLOAD_POST = 'post/UNLOAD_POST';

export const readPost = (id) => ({ type: READ_POST, payload: id });
export const unloadPost = () => ({ type: UNLOAD_POST });

const readPostSaga = createRequestSaga(READ_POST, postsAPI.readPost);

export function* postSaga() {
  yield takeLatest(READ_POST, readPostSaga);
}

const initialState = {
  post: null,
  error: null,
};

export default function post(state = initialState, action) {
  switch (action.type) {
    case READ_POST_SUCCESS:
      return { ...initialState, post: action.payload };
    case READ_POST_FAILURE:
      return { ...initialState, error: action.payload };
    case UNLOAD_POST:
      return { ...initialState };
    default:
      return state;
  }
}
