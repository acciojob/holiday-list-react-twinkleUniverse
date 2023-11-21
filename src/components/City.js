import React from 'react';

const City = ({ name, country, keyName }) => (
  <div key={keyName}>
    <p>{`${name}, ${country}`}</p>
  </div>
);

export default City;