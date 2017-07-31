import React from 'react';
import { Provider } from 'react-redux';
import InspectApp from './navigators/AppNavigator';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import AppReducer from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(AppReducer);

export default () => {
    return (
      <Provider store={store}>
        <InspectApp/>
      </Provider>
    );
}