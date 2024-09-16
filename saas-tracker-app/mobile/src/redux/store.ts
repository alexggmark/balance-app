import { createStore, combineReducers } from 'redux';
import { trackerReducer } from './reducers';

// Combine all reducers
const rootReducer = combineReducers({
  tracker: trackerReducer,
});

// Create the Redux store
const store = createStore(rootReducer);

export default store;