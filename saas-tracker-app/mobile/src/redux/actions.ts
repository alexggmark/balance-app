// Action types
export const CREATE_TRACKER = 'CREATE_TRACKER';
export const UPDATE_TRACKER = 'UPDATE_TRACKER';
export const DELETE_TRACKER = 'DELETE_TRACKER';

// Action creators
export const createTracker = (trackerData: any) => {
  return {
    type: CREATE_TRACKER,
    payload: trackerData,
  };
};

export const updateTracker = (trackerId: string, trackerData: any) => {
  return {
    type: UPDATE_TRACKER,
    payload: {
      trackerId,
      trackerData,
    },
  };
};

export const deleteTracker = (trackerId: string) => {
  return {
    type: DELETE_TRACKER,
    payload: trackerId,
  };
};