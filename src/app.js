import React, { Component } from 'react';
import {
  Actions,
  Router,
  Scene,
  ActionConst,
} from 'react-native-router-flux';
import { Provider } from 'react-redux';
import configureStore from './store';
import rootSaga from './sagas/rootSaga';

import InitScreen from './components/InitScreen';
import Login from './components/Login';

const scenes = Actions.create(
  <Scene key="root" hideNavBar >
    <Scene
      key="initScreen"
      component={InitScreen}
    />
    <Scene
      initial
      key="login"
      component={Login}
    />
  </Scene>,
);

const store = configureStore();
store.runSaga(rootSaga);

export default class feedapp extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router scenes={scenes} />
      </Provider>
    );
  }
}
