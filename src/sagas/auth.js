import {
  put,
  call,
  race,
  takeEvery,
} from 'redux-saga/effects';
import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { login } from '../auth/functionality';
import actionsConst from '../constants/actions';

function* authorize({ username, pass }) {
  try {
    return yield call(login, username, pass);
  } catch (err) {
    console.error(err.message);
  }
}

function* handleAuthorizeRequest({ data: { username, pass } }) {
  const winner = yield race({
    auth: call(authorize, { username, pass }),
    logout: takeEvery(actionsConst.LOGOUT, logout),
  });

  if (winner.auth) {
    yield put({ type: actionsConst.SET_AUTH, isLoggedIn: true });
    Actions.feed();
  } else if (!winner.logout) {
    Alert.alert('Opps!', 'Invalid email or password');
  }
}

export function* watchAuthorize() {
  yield takeEvery(actionsConst.LOGIN_REQUEST, handleAuthorizeRequest);
}

function* logout() {
  yield put({ type: actionsConst.SET_AUTH, isLoggedIn: false });
}

export function* logoutFlow() {
  yield takeEvery(actionsConst.LOGOUT, logout);
}
