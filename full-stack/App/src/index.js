import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import rootSaga from './sagas/index'

import rootReducer from "./reducers";
import App from "./App";

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware, createLogger({ collapsed: true })]
const store = createStore(rootReducer, {}, applyMiddleware(...middleware));
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
