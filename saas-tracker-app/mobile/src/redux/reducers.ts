import { combineReducers } from 'redux';
import { Tracker } from '../../types';

// Define the initial state for the tracker data
const initialTrackerState: Tracker[] = [];

// Define the tracker reducer
const trackerReducer = (state = initialTrackerState, action: any) => {
  switch (action.type) {
    case 'ADD_TRACKER':
      return [...state, action.payload];
    case 'UPDATE_TRACKER':
      return state.map((tracker) =>
        tracker.id === action.payload.id ? action.payload : tracker
      );
    case 'DELETE_TRACKER':
      return state.filter((tracker) => tracker.id !== action.payload);
    default:
      return state;
  }
};

// Combine all reducers
const rootReducer = combineReducers({
  trackers: trackerReducer,
});

export default rootReducer;