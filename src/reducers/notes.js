import { ADD_NOTE, ADD_NOTE_SUCCESS, ADD_NOTE_ERROR, UPDATE_NOTE, DELETE_NOTE } from '../actions/actionCreators';

function notes(state = [], action) {
  switch(action.type) {
    case ADD_NOTE:
      console.log('adding note');
      return state

    case ADD_NOTE_SUCCESS:
      console.log('adding note success');
      return [...state, {
        title: action.note.title,
        note: action.note.note,
      }];

    case ADD_NOTE_ERROR:
      console.log('adding note error');
      return state

    case UPDATE_NOTE:
      console.log('updating note');
      return state

    case DELETE_NOTE:
      console.log('deleting note');
      return state

    default:
      return state
  }
}

export default notes
