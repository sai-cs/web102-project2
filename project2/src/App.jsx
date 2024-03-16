// App.jsx
import React, { useState } from 'react';
import CardInfo from './components/Info';
import Card from './components/Card';
import Next from './components/Next';
import Back from './components/Back';
import './App.css';

const App = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleNextCard = (step) => {
    setCurrentCardIndex((prevIndex) => (prevIndex + step + cards.length) % cards.length);
    setGuess('');
    setFeedback('');
  };

  const handleSubmit = () => {
    if (guess.trim().toLowerCase() === cards[currentCardIndex].answer.toLowerCase()) {
      setFeedback('Correct!');
      setGuess('');
    } else {
      setFeedback('Incorrect!');
      setGuess('');
    }
  };

  const cards = [
    {
      question: "What is the proper technique for a barbell squat?",
      answer: "Feet shoulder width apart"
    },
    {
      question: "What is the proper technique for a deadlift?",
      answer: "Hips and knees bent"
    },
    {
      question: "How should you breathe during heavy lifting?",
      answer: "Take a deep breath"
    },
    {
      question: "What are some common weightlifting grips?",
      answer: "Overhand, underhand"
    },
    {
      question: "What is the purpose of weightlifting chalk?",
      answer: "Improve grip"
    },
    {
      question: "How can you prevent wrist pain during overhead presses?",
      answer: "Proper wrist alignment"
    },
    {
      question: "What are the benefits of compound exercises?",
      answer: "Target multiple muscles"
    },
    {
      question: "What is the difference between free weights and machine weights?",
      answer: "Greater freedom of movement"
    },
    {
      question: "What are some common weightlifting accessories?",
      answer: "Lifting belts, wrist wraps"
    },
    {
      question: "How should you warm up before weightlifting?",
      answer: "Dynamic stretches"
    }
  ];
  

  const currentCard = cards[currentCardIndex];

  return (
    <div className="App">
      <CardInfo title="Weightlifting Trivia" description="How good is your weightlifting knowledge? Test yourself and see!" totalCards={cards.length} />
      <Card question={currentCard.question} answer={currentCard.answer} />
      <div className="guess-container">
        <label htmlFor="guess">Guess the Answer:</label>
        <input type="text" id="guess" value={guess} onChange={(e) => setGuess(e.target.value)} style={{ backgroundColor: feedback === 'Correct!' ? 'lightgreen' : feedback === 'Incorrect!' ? 'lightcoral' : 'white' }} />
        <button onClick={handleSubmit} style={{ backgroundColor: feedback === 'Correct!' ? 'lightgreen' : feedback === 'Incorrect!' ? 'lightcoral' : 'white' }}>Submit</button>
      </div>
      <div className="button-container">
        <Back onClick={() => handleNextCard(-1)} />
        <Next onClick={() => handleNextCard(1)} />
      </div>
    </div>
  );
};

export default App;
