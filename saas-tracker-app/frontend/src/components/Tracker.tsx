import React from 'react';

interface TrackerProps {
  name: string;
  type: string;
  data: number[];
}

const Tracker: React.FC<TrackerProps> = ({ name, type, data }) => {
  const average = data.reduce((sum, value) => sum + value, 0) / data.length;

  return (
    <div className="tracker">
      <h2>{name}</h2>
      <p>Type: {type}</p>
      <p>Average: {average.toFixed(2)}</p>
      <ul>
        {data.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tracker;