import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './auth';
import notes from './notes';

const rootReducer = combineReducers({auth, notes, routing: routerReducer});

export default rootReducer;
