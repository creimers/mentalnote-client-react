import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCESS } from '../actions/actionCreators';

function auth(
  state = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('jwt_token') ? true : false
  }, action) {

  switch(action.type) {
    case LOGIN_REQUEST:
      console.log('auth reducer: login request');
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        user: action.creds
      });
    case LOGIN_SUCCESS:
      console.log('auth reducer: login success');
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        errorMessage: ''
      });
    case LOGIN_ERROR:
      console.log('auth reducer: login failure');
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      });
    case LOGOUT_SUCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
      });
    default:
      return state;
  }
}

export default auth
