import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as genealogyAPI from '../lib/api/genealogy';

const [READ, READ_SUCCESS, READ_FAILURE] = createRequestActionTypes('genealogy/READ');

export const read = () => ({ type: READ });

const readSaga = createRequestSaga(READ, genealogyAPI.read);

export function* genealogySaga() {
  yield takeLatest(READ, readSaga);
}

const initialState = {
  list: null,
  error: null,
};

export default function genealogy(state = initialState, action) {
  switch (action.type) {
    case READ_SUCCESS:
      return { ...state, list: action.payload };
    case READ_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
