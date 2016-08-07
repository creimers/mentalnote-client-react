import { ADD_NOTE, UPDATE_NOTE, DELETE_NOTE } from '../actions/actionCreators';

function notes(state = [], action) {
  switch(action.type) {
    case ADD_NOTE:
      console.log('adding note');
      break;

    case UPDATE_NOTE:
      console.log('updating note');
      break;

    case DELETE_NOTE:
      console.log('deleting note');
      break;

    default:
      return state
  }
}

export default notes
