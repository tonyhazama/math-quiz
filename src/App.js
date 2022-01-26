import React, {useEffect, useState} from 'react';
import StartComponent from './start';
import 'antd/dist/antd.css';
import { generateQuestions } from './util/generateQuestions';
import QuizComponent from './quiz';
import { Button, Col, Row } from 'antd';
import { Result } from './Result';

export default function App() {
  const [parameter, setParameter] = useState(null);
  const [questions, setQuestions] = useState(null);
  const [result, setResult] = useState(null);
  const modes = [
    {n: 5, t: 0},
    {n: 10, t: 0},
    {n: 100, t: 5},
  ];
  
  useEffect(_ => {
    initiateQuiz(0, 2);
    handleFinish(

      [{"key":0,"a":1,"b":10,"o":"-","answer":-9,"userAnswer":1},{"key":1,"a":5,"b":7,"o":"+","answer":12,"userAnswer":1},{"key":2,"a":3,"b":6,"o":"-","answer":-3,"userAnswer":1},{"key":3,"a":2,"b":6,"o":"-","answer":-4,"userAnswer":1},{"key":4,"a":10,"b":1,"o":"+","answer":11,"userAnswer":1},{"key":0,"a":1,"b":10,"o":"-","answer":-9,"userAnswer":1},{"key":1,"a":5,"b":7,"o":"+","answer":12,"userAnswer":1},{"key":2,"a":3,"b":6,"o":"-","answer":-3,"userAnswer":1},{"key":3,"a":2,"b":6,"o":"-","answer":-4,"userAnswer":1},{"key":4,"a":10,"b":1,"o":"+","answer":11,"userAnswer":1},{"key":0,"a":1,"b":10,"o":"-","answer":-9,"userAnswer":1},{"key":1,"a":5,"b":7,"o":"+","answer":12,"userAnswer":1},{"key":2,"a":3,"b":6,"o":"-","answer":-3,"userAnswer":1},{"key":3,"a":2,"b":6,"o":"-","answer":-4,"userAnswer":1},{"key":4,"a":10,"b":1,"o":"+","answer":11,"userAnswer":1},{"key":0,"a":1,"b":10,"o":"-","answer":-9,"userAnswer":1},{"key":1,"a":5,"b":7,"o":"+","answer":12,"userAnswer":1},{"key":2,"a":3,"b":6,"o":"-","answer":-3,"userAnswer":1},{"key":3,"a":2,"b":6,"o":"-","answer":-4,"userAnswer":1},{"key":4,"a":10,"b":1,"o":"+","answer":11,"userAnswer":1}]
      
      );
  }, []);


  const initiateQuiz = (difficulty, mode) => {
    setParameter({difficulty, mode});
    const q = generateQuestions(difficulty, modes[mode]['n']);
    setQuestions(q);
    console.log(q);
  };
  
  const handleFinish = (result) => {
    console.log(result);
    setResult(result);
  };

  const handleBack = () => {
    setParameter(null);
    setQuestions(null);
    setResult(null);
  };


  return (
    <div style={{height: '100%'}}>
      {parameter ? (
        result ? <Result result={result} onBack={handleBack} /> :
        <QuizComponent questions={questions} time={modes[parameter.mode].t} onFinish={handleFinish} />
      ) : (
        <StartComponent onStartQuiz={initiateQuiz} />
      )}
    </div>
  )
}