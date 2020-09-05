import React from 'react';

import { QuestionCard } from './components/QuestionCard'

function App() {

  const startQuiz = async() => {}
  
  const nextQuestion = async() => {}



  return (
    <div className="App">

      <h1> Quiz App </h1>

      <button className="start" onClick={startQuiz}>
         Begin Quiz
      </button>

      <p className="score"> 
         Score: 
      </p>

      <p>
        Loading Question ......
      </p>

      <QuestionCard />

      <button className="next" onClick={nextQuestion}> 
         Next Question
      </button>
    </div>
  );
}

export default App;
