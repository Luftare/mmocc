import React from 'react';

const Time = ({ milliseconds }) => {
  const minutes = Math.floor(milliseconds / 60 / 1000);
  return <div>{minutes} min</div>;
};

export default Time;
