// Card.jsx
import React, { useState } from 'react';

const Card = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleShowAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div>
      <div className="card" onClick={handleShowAnswer}>
        {showAnswer ? <p>{answer}</p> : <p>{question}</p>}
      </div>
    </div>
  );
};

export default Card;
