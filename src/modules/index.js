import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from './loading';
import auth, { authSaga } from './auth';
import user, { userSaga } from './user';
import menu, { menuSaga } from './menu';
import write, { writeSaga } from './write';
import post, { postSaga } from './post';

const rootReducer = combineReducers({
  loading,
  auth,
  user,
  menu,
  write,
  post,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), menuSaga(), writeSaga(), postSaga()]);
}

export default rootReducer;
