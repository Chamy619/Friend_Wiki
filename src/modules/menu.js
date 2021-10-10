import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as listApi from '../lib/api/list';

const [MENU_LIST, MENU_LIST_SUCCES, MENU_LIST_FAILURE] = createRequestActionTypes('list/MENU_LIST');
const SELECT = 'list/SELECT';

export const menuList = () => ({ type: MENU_LIST });
export const select = (person) => ({ type: SELECT, payload: person });

const menuListSaga = createRequestSaga(MENU_LIST, listApi.menuList);

export function* menuSaga() {
  yield takeLatest(MENU_LIST, menuListSaga);
}

const initialState = {
  menuList: null,
  menuError: null,
  selected: null,
};

export default function menu(state = initialState, action) {
  switch (action.type) {
    case MENU_LIST_SUCCES:
      return { ...state, menuList: action.payload, menuError: null };
    case MENU_LIST_FAILURE:
      return { ...state, menuList: null, menuError: action.payload };
    case SELECT:
      return { ...state, selected: action.payload };
    default:
      return state;
  }
}
