import { Dispatch } from 'redux';
import { Tracker } from '../../types';

// Action types
export const ADD_TRACKER = 'ADD_TRACKER';
export const UPDATE_TRACKER = 'UPDATE_TRACKER';

// Action interfaces
interface AddTrackerAction {
  type: typeof ADD_TRACKER;
  payload: Tracker;
}

interface UpdateTrackerAction {
  type: typeof UPDATE_TRACKER;
  payload: Tracker;
}

// Action creators
export const addTracker = (tracker: Tracker): AddTrackerAction => ({
  type: ADD_TRACKER,
  payload: tracker,
});

export const updateTracker = (tracker: Tracker): UpdateTrackerAction => ({
  type: UPDATE_TRACKER,
  payload: tracker,
});

// Async action creator example
export const fetchTracker = (trackerId: string) => async (dispatch: Dispatch) => {
  try {
    // Make API call to fetch tracker data
    const response = await fetch(`/api/trackers/${trackerId}`);
    const data = await response.json();

    // Dispatch action to update tracker data in the store
    dispatch(updateTracker(data));
  } catch (error) {
    console.error('Error fetching tracker:', error);
  }
};