import React from 'react';
import { Provider } from 'react-redux';
import InspectApp from './containers';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import AppReducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(AppReducer);

export default () => {
    return (
      <Provider store={store}>
        <InspectApp/>
      </Provider>
    );
}