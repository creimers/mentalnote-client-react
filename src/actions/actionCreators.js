// auth
export const LOGOUT_SUCESS = 'LOGOUT_SUCESS';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  }
}

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
function loginSuccess(token) {
  localStorage.setItem('jwt_token', token)
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    jwt_token: token
  }
}

export const LOGIN_ERROR = 'LOGIN_ERROR';
function loginError(message) {
  return {
    type: LOGIN_ERROR,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export function loginUser(creds) {

  return function (dispatch) {
    dispatch(requestLogin(creds))

    var headers = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    })

    var request = new Request('http://localhost:8000/v1/authenticate/', 
      {
        method: "POST",
        mode: 'cors',
        headers: headers,
        body: JSON.stringify(creds)
      }
    )

  return fetch(request)
    .then(response =>
      response.json().then(json => ({ json, response }))
    ).then(({ json, response }) => {
      if (!response.ok) {
        dispatch(loginError(json.non_field_errors[0]))
      }
      else {
        dispatch(loginSuccess(json.token))
      }
      return response

    }).catch(err => console.log(err))
  }
}


export function logoutUser() {
  localStorage.removeItem('jwt_token');
  return {
    type: LOGOUT_SUCESS,
    isFetching: false,
    isAuthenticated: false
  }
}

// notes
export const FETCH_NOTES = 'FETCH_NOTES';
export const RECEIVE_NOTES_SUCCESS = 'RECEIVE_NOTES_SUCCESS';
export const RECEIVE_NOTES_ERROR = 'RECEIVE_NOTES_ERROR';

export function fetchNotes() {
  return {
    type: FETCH_NOTES
  }
}

export const ADD_NOTE = 'ADD_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

export function addNote(note) {
  return {
    type: ADD_NOTE,
    note: note
  }
}

export function deleteNote(noteId) {
  return {
    type: DELETE_NOTE,
    noteId: noteId
  }
}

export function updateNote(note) {
  return {
    type: DELETE_NOTE,
    note: note
  }
}
