import React from 'react';

const Bottle = ({ amountLeft }) => {
  const percentLeft = Math.floor(amountLeft * 100);
  return <span>{percentLeft} %</span>;
};

export default Bottle;
