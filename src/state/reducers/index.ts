import { combineReducers } from 'redux';

import { modalReducer } from './modalReducer';

const rootReducer = combineReducers({
  modal: modalReducer,
});

export default combineReducers({
  state: rootReducer,
});
