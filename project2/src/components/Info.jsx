import React from 'react';

const Info = ({ title, description, totalCards }) => {
  return (
    <div>
      <h1 style={{ color: 'white' }}>{title}</h1>
      <p style={{ color: 'white' }}>{description}</p>
      <p style={{ color: 'white' }}>Total Cards: {totalCards}</p>
    </div>
  );
};

export default Info;
