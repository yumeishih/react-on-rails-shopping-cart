import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Content from '../../containers/content';
import reducers from '../../reducers';
import api from '../../middleware/api';
import ReduxThunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(ReduxThunk, api));

export default () =>(
  <Provider store={store}>
    <Content />
  </Provider>
)