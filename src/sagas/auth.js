import {
  put,
  call,
  race,
  take,
} from 'redux-saga/effects';
import { login } from '../auth/functionality';
import actionsConst from '../constants/actions';

function* authorize({ username, pass }) {
  try {
    return yield call(login, username, pass);
  } catch (err) {
    return yield put({ type: actionsConst.REQUEST_ERROR, err: err.message });
  }
}

export default function* watchAuthorize() {
  const request = yield take(actionsConst.LOGIN_REQUEST);
  const { username, pass } = request.data;

  const winner = yield race({
    auth: call(authorize, { username, pass }),
    logout: take(actionsConst.LOGOUT),
  });

  if (winner.auth) {
    yield put({ type: actionsConst.SET_AUTH, isLoggedIn: true });
    // todo: go to feed
  }
}
