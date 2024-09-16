import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/reducers';
import { createTracker } from '../redux/actions';
import Tracker from '../components/Tracker';

const Home: React.FC = () => {
  const trackers = useSelector((state: RootState) => state.trackers);
  const dispatch = useDispatch();

  const handleCreateTracker = () => {
    dispatch(createTracker());
  };

  return (
    <div>
      <h1>Activity Trackers</h1>
      <button onClick={handleCreateTracker}>Create Tracker</button>
      {trackers.map((tracker) => (
        <Tracker key={tracker.id} tracker={tracker} />
      ))}
    </div>
  );
};

export default Home;