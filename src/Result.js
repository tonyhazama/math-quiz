import { CheckOutlined, CloseOutlined } from "@ant-design/icons/lib/icons";
import { Button, Col, Row, Table, Tag } from "antd";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

export function Result (props = {result: []}) {
  const [data, setData] = useState([{}]);
  const [score, setScore] = useState(null);
  const columns = [
    {
      title: '#',
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: 'Question',
      dataIndex: 'question',
      key: 'question',
      align: 'center'
    },
    {
      title: 'Your Answer',
      dataIndex: 'answer',
      key: 'answer',
      align: 'center'
    },
    {
      title: '',
      dataIndex: 'isCorrect',
      key: 'isCorrect',
      render: tags => (<Tag color={tags ? 'green' : 'red'}>{tags ? <CheckOutlined />: <CloseOutlined />}</Tag>)
    },
  ];

  useEffect(() => {
    renderData(props.result);
  }, []);

  const renderData = (data) => {
    const col = data.map((c, i) => ({
      number: i+1,
      question: `${c.a} ${c.o} ${c.b} = ${c.answer}`,
      answer: c.userAnswer,
      isCorrect: c.answer === c.userAnswer
    }));
    setData(col);
    setScore(col.filter(e => e.isCorrect).length);
  };
  
  return (
    <>
      <Row style={{flexDirection: 'column', alignItems: 'center'}}>
        <Col style={{fontSize: '1.6em', fontWeight: 'bold', marginBottom: '2em'}}>Result</Col>
        <Table dataSource={data} columns={columns} pagination={false} style={{marginBottom: '2em'}} footer={_ => (
          score !== null && <div style={{display: 'flex', justifyContent: 'space-between', fontWeight: 'bold'}}>
            <div>Score</div>
            <div>{score} / {data.length}</div>
          </div>
        )} />
        {/* {result.map((r, i) => {
          const {a, o, b, answer, userAnswer} = r;
          return (
            <Col style={{ fontSize: '1.2em', textAlign: 'center', marginBottom: '2em'}}>
              <div style={{fontWeight: 'bold'}}>Question {i+1}</div>
              <div>{`${a} ${o} ${b} = ${answer}`}</div>
            </Col>
          )
        })} */}
        <Button onClick={props.onBack}>Back</Button>
      </Row>
    </>
  )
}