import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Cart from '../../containers/cart';
import reducers from '../../reducers';
import api from '../../middleware/api';
import ReduxThunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(ReduxThunk, api));

export default () =>(
  <Provider store={store}>
    <Cart />
  </Provider>
)