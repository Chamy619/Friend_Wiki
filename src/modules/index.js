import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from './loading';
import auth, { authSaga } from './auth';
import user, { userSaga } from './user';
import menu, { menuSaga } from './menu';
import write from './write';

const rootReducer = combineReducers({
  loading,
  auth,
  user,
  menu,
  write,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), menuSaga()]);
}

export default rootReducer;
