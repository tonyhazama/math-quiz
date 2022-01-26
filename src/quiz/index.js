/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Col, Input, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useInterval } from '../util/useInterval';

export default function QuizComponent(props) {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);

  const isLastQuestion = currentQ === questions.length - 1;

  useEffect(_ => {
    setQuestions(props.questions);
  }, []);

  const handlePrev = () => { setCurrentQ(currentQ > 0 ? currentQ - 1 : currentQ); };
  const handleNext = () => { setCurrentQ(currentQ < (questions.length) ? currentQ + 1 : currentQ); };

  const handleFinish = (q = questions, a = answers) => {
    const isAllAnswered = a.filter(e => e && e.length > 0).length === q.length;
    if (isAllAnswered) {
      let result = q;
      result = result.map((e, i) => {
        return {...e, userAnswer: parseInt(a[i])};
      });
      props.onFinish(result);
    } else {
      alert('Please answer all the question');
    }
  };

  const handleOutOfTime = () => {
    let q = questions.splice(0, currentQ);
    let a = answers.splice(0, currentQ);
    handleFinish(q, a);
  };

  const handleChangeValue = (key, value) => {
    const newAnswers = [...answers];
    newAnswers[key] = value;
    setAnswers(newAnswers);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      maxWidth: '600px',
      margin: 'auto'
      }}
    >
      <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
        <div></div>
        {props.time ? <div>
          <Timer time={props.time} onFinish={handleOutOfTime} />
        </div> : ''}
        <div style={{
          background: '#dbdbdb',
          padding: '5px 20px',
          borderRadius: '1000px'
        }}>
          {props.time > 0 ? `${currentQ + 1}` : `${currentQ + 1} / ${questions.length}`}
        </div>
      </div>
      <Row style={{flexDirection: 'column', flex: '1', width: '100%', justifyContent: 'end'}}>
        {questions.length > 0 && questions[currentQ] ? <Col>
          <QuestionComponent question={questions[currentQ]} onChangeValue={handleChangeValue} value={answers[currentQ]} />
        </Col> : ''}
        <Col style={{textAlign: 'center', paddingTop: '20px', paddingBottom: '200px'}}>
          {/* <Button className="btn" disabled={currentQ <= 0} onClick={handlePrev} style={{width: 'calc(50% - 10px)', marginRight: '20px'}}>
            Previous
          </Button> */}
          {!isLastQuestion ? (
            <Button className="btn" disabled={!answers[currentQ]} onClick={handleNext} style={{width: '100%'}}>
              Next
            </Button>
          ) :
          <Button className="btn" onClick={_ => handleFinish()} style={{width: '100%'}}>
            Finish
          </Button>}
          
        </Col>
      </Row>
      <div>
        {JSON.stringify(answers)}
      </div>
    </div>
  )
}


const QuestionComponent = (props) => {
  const [question, setQuestion] = useState({});
  const [value, setValue] = useState('');
  const {a = 'a', b = 'b', o = '+'} = question;
  
  useEffect(_ => {
    setValue(props.value)
    setQuestion(props.question);
  }, [props.question]);

  const handleChangeValue = (e) => {
    props.onChangeValue(question.key, e.target.value);
    setValue(e.target.value);
  }
  
  

  return (
    <>
      <div style={{fontWeight: 'bold', fontSize: '2em', textAlign: 'center', marginBottom: '10px'}}>
        {`${a} ${o} ${b}`}
      </div>
      <div>
        <Input value={value} onChange={handleChangeValue} />
      </div>
    </>
  );
} 

const Timer = (props) => {
  const [time, setTime] = useState(0);

  useEffect(_ => {
    if (props.time > 0) {
      setTime(props.time)
    }
    
  }, []);

  useInterval(_ => {
    if (time > 0) {
      setTime(prevTime => prevTime - 1)
      if (time === 1) {
        props.onFinish();
      }
    }
  }, time > 0 ? 1000 : null)

  const minute = Math.floor(time / 60);
  const second = time % 60;
  return (
    <div>
      {`${minute} : ${second}`}
    </div>
  )
}