import React from 'react';

const Time = ({ milliseconds }) => {
  const minutes = Math.floor(milliseconds / 60 / 1000);
  const seconds = Math.floor((milliseconds % 60000) / 1000);
  return <div>{minutes} min {seconds} sec</div>;
};

export default Time;
