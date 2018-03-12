import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Content from '../../containers/content';
import reducers from '../../reducers';
import api from '../../middleware/api';

const store = createStore(reducers, applyMiddleware(ReduxThunk, api));
export default () => (
  <Provider store={store}>
    <Content />
  </Provider>
);
