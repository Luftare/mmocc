import React from 'react';
import Bottle from './Bottle';

const Bottles = ({ bottles, remainingSeconds }) => {
  const remainingMinutes = Math.floor(remainingSeconds / 60);
  const currentBottles = bottles * (remainingMinutes / 100);
  return [...Array(bottles)].map((_, index) => (
    <Bottle
      key={index}
      amountLeft={Math.max(Math.min(1, currentBottles - index), 0)}
    />
  ));
};

export default Bottles;
