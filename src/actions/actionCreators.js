// auth
const BASE_URL = 'http://localhost:8000/v1/'

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

    var request = new Request(BASE_URL + 'authenticate/', 
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
export function fetchNotes() {
  return function(dispatch) {
    var token = localStorage.getItem('jwt_token')

    var config = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`
      },
      method: 'GET',
      mode: 'cors',
    }

    return fetch(BASE_URL + 'notes/', config)
      .then(response =>
        response.json().then(json => ({ json, response }))
      ).then(({ json, response }) => {
        if (!response.ok) {
          dispatch(fetchNotesError(json.detail))
        }
        else {
          dispatch(fetchNotesSuccess(json))
        }
        return response

      }).catch(err => console.log(err))
  }
}

export const FETCH_NOTES_SUCCESS = 'FETCH_NOTES_SUCCESS';
function fetchNotesSuccess(notes) {
  return {
    type: FETCH_NOTES_SUCCESS,
    isFetching: false,
    notes: notes
  }
}

export const FETCH_NOTES_ERROR = 'FETCH_NOTES_ERROR';
function fetchNotesError(message) {
  return {
    type: FETCH_NOTES_ERROR,
    isFetching: false,
    errorMessage: message
  }
}

export const ADD_NOTE = 'ADD_NOTE';
export function addNote(note) {
  return function(dispatch) {
    var token = localStorage.getItem('jwt_token')

    var config = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`
      },
      method: "POST",
      mode: 'cors',
      body: JSON.stringify(note)
    }

    return fetch(BASE_URL + 'notes/', config)
      .then(response =>
        response.json().then(json => ({ json, response }))
      ).then(({ json, response }) => {
        if (!response.ok) {
          dispatch(addNoteError(json.detail))
        }
        else {
          dispatch(addNoteSuccess(json))
        }
        return response

      }).catch(err => console.log(err))
  }
}

export const ADD_NOTE_SUCCESS = 'ADD_NOTE_SUCCESS';
export function addNoteSuccess(note) {
  return {
    type: ADD_NOTE_SUCCESS,
    isFetching: false,
    note: note
  }
}

export const ADD_NOTE_ERROR = 'ADD_NOTE_ERROR';
export function addNoteError(message) {
  return {
    type: ADD_NOTE_ERROR,
    isFetching: false,
    errorMessage: message
  }
}

export const DELETE_NOTE = 'DELETE_NOTE';
export function deleteNote(noteId) {
  return {
    type: DELETE_NOTE,
    noteId: noteId
  }
}

export const UPDATE_NOTE = 'UPDATE_NOTE';
export function updateNote(note) {
  return {
    type: DELETE_NOTE,
    note: note
  }
}
