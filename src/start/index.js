import { Radio } from 'antd';
import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development';

export default function StartComponent(props) {
  const [difficulty, setDifficulty] =  useState(0);
  const [mode, setMode] =  useState(0);

  const startGame = () => {
    props.onStartQuiz(difficulty, mode);
  };

  const onPickDifficulty = (e) => {
    setDifficulty(e.target.value);
  };

  const onPickMode = (e) => {
    setMode(e.target.value);
  };

  return (
    <div className='container'>
      <div style={{marginBottom: '20px', width: '400px'}}>
        <Radio.Group style={{width: '100%'}} value={difficulty} onChange={onPickDifficulty}>
          <Radio.Button style={{width: '33%', textAlign: 'center'}} value={0}>Easy</Radio.Button>
          <Radio.Button style={{width: '33%', textAlign: 'center'}} value={1}>Medium</Radio.Button>
          <Radio.Button style={{width: '33%', textAlign: 'center'}} value={2}>Hard</Radio.Button>
        </Radio.Group>
      </div>
      <div style={{marginBottom: '20px', width: '400px'}}>
        <Radio.Group style={{width: '100%'}} value={mode} onChange={onPickMode}>
          <Radio.Button style={{width: '33%', textAlign: 'center'}} value={0}>5 Question</Radio.Button>
          <Radio.Button style={{width: '33%', textAlign: 'center'}} value={1}>10 Question</Radio.Button>
          <Radio.Button style={{width: '33%', textAlign: 'center'}} value={2}>Time </Radio.Button>
        </Radio.Group>
      </div>
      <div style={{marginBottom: '20px'}}>
        <button className='btn' onClick={_ => startGame()}>Start</button> 
      </div>
    </div>
  )
}
