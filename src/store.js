import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';

const sagaMiddleware = createSagaMiddleware();

export default function () {
  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(sagaMiddleware, logger),
    ),
  );

  store.runSaga = sagaMiddleware.run;

  return store;
}
