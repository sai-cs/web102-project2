import React, { useState } from 'react';

const Card = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="card" onClick={handleClick}>
      {showAnswer ? <p>{answer}</p> : <p>{question}</p>}
    </div>
  );
};

export default Card;
