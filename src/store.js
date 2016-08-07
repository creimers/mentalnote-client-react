import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

// import the root reducer
import rootReducer from './reducers/index';

const defaultState = {
  auth: {
    isFetching: false,
    isAuthenticated: localStorage.getItem('jwt_token') ? true : false,
    errorMessage: ''
  },
  notes: []
}

const store = createStore(
  rootReducer,
  defaultState,
  compose(applyMiddleware(thunk))
);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
