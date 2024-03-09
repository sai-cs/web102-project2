import React, { useState } from 'react';
import CardInfo from './components/Info';
import Card from './components/Card';
import NextCard from './components/Next';
import './App.css';

const App = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    setShowAnswer(false); 
  };
  

  const cards = [

    { 
      question: "What is the proper technique for performing a barbell squat?", 
      answer: "The proper technique for a barbell squat involves keeping your feet shoulder-width apart, bracing your core, lowering your hips back and down until your thighs are parallel to the ground, and then driving through your heels to return to the starting position."
    },
    { 
      question: "What is the proper technique for performing a deadlift?", 
      answer: "The proper technique for a deadlift involves standing with your feet hip-width apart, bending at the hips and knees to lower your torso towards the ground while keeping your back straight, gripping the barbell with both hands, and then driving through your heels to lift the weight while maintaining a neutral spine."
    },
    { 
      question: "How should you breathe during heavy lifting?", 
      answer: "You should take a deep breath and hold it before beginning the lift, known as the Valsalva maneuver, to create intra-abdominal pressure and stabilize the spine. Exhale forcefully after completing the lift."
    },
    { 
      question: "What are some common types of weightlifting grips?", 
      answer: "Common weightlifting grips include the overhand grip (pronated grip), underhand grip (supinated grip), and mixed grip (one hand overhand, one hand underhand). Each grip has its advantages and is used for different lifts."
    },
    { 
      question: "What is the purpose of using weightlifting chalk?", 
      answer: "Weightlifting chalk, also known as magnesium carbonate, is used to improve grip by reducing moisture and increasing friction between the hands and the barbell. It helps prevent slipping and allows for better control of the weight."
    },
    { 
      question: "How can you prevent wrist pain during overhead presses?", 
      answer: "You can prevent wrist pain during overhead presses by ensuring proper wrist alignment with the forearm, using wrist wraps for support, and avoiding excessive bending of the wrist during the lift."
    },
    { 
      question: "What are the benefits of incorporating compound exercises into your weightlifting routine?", 
      answer: "Compound exercises target multiple muscle groups simultaneously and are more time-efficient than isolation exercises. They help improve overall strength, coordination, and functional fitness."
    },
    { 
      question: "What is the difference between free weights and machine weights?", 
      answer: "Free weights (e.g., dumbbells, barbells) allow for greater freedom of movement and engage stabilizer muscles for balance and coordination. Machine weights provide guided movement and may isolate specific muscle groups."
    },
    { 
      question: "What are some common weightlifting accessories?", 
      answer: "Common weightlifting accessories include lifting belts, wrist wraps, lifting straps, and knee sleeves. These accessories can provide support, stability, and protection during heavy lifts."
    },
    { 
      question: "How should you warm up before weightlifting?", 
      answer: "A proper warm-up before weightlifting should include dynamic stretches, mobility exercises, and light sets of the main lifts. This helps increase blood flow to the muscles, improve joint flexibility, and prepare the body for heavier lifting."
    }
  ];

  const currentCard = cards[currentCardIndex];

  return (
    <div className="App">
      <CardInfo title="Weightlifting Trivia" description="How good is your weightlifting knowledge? Test yourself and see!" totalCards={cards.length} />
      <Card question={currentCard.question} answer={currentCard.answer} showAnswer={showAnswer} onClick={() => setShowAnswer(!showAnswer)} />
      <NextCard onClick={handleNextCard} />
    </div>
  );
};

export default App;
