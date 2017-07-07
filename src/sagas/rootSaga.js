import {
  put,
  fork,
  all,
  call,
  race,
  take,
} from 'redux-saga/effects';
import axios from 'axios';
import { login } from '../auth/functionality';
import actionsConst from '../constants/actions';

// todo: remove? export
export function* authorize({ username, pass }) {
  try {
    yield call(login, username, pass);
  } catch (err) {
    yield put({ type: actionsConst.REQUEST_ERROR, err: err.message });
  }
}

export function* watchAuthorize() {
  const request = yield take(actionsConst.LOGIN_REQUEST);
  const { username, pass } = request.data;

  const winner = yield race({
    auth: call(authorize, { username, pass }),
    logout: take(actionsConst.LOGOUT),
  });

  console.log(winner)
  if (winner.auth) {
    yield put({ type: actionsConst.SET_AUTH, isLoggedIn: true });
    // todo: go to feed
  }
}

export default function* rootSaga() {
  yield [
    watchAuthorize(),
  ];
}
