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
  
  // useEffect(_ => {
  //   initiateQuiz(0, 2);
  //   handleFinish([{"key":0,"a":10,"b":9,"o":"+","answer":19,"userAnswer":19},{"key":1,"a":5,"b":6,"o":"+","answer":11,"userAnswer":11},{"key":2,"a":5,"b":5,"o":"-","answer":0,"userAnswer":0},{"key":3,"a":8,"b":6,"o":"+","answer":14,"userAnswer":1},{"key":4,"a":8,"b":4,"o":"-","answer":4,"userAnswer":4}]);
  // }, []);


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