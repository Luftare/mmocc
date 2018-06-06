import React from 'react';

const Time = ({ seconds }) => {
  const remainingMinutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return (
    <div>
      {remainingMinutes} min {remainingSeconds} sec
    </div>
  );
};

export default Time;
