import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App.js';
import rootReducer from 'redux/reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'redux/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware),
  );
sagaMiddleware.run(rootSaga);
ReactDOM.render(<App store={store} />, document.getElementById('root'));