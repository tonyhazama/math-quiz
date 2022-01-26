export function generateQuestions (difficulty = 0, numberOfQuestion = 20) {
  let q = new Array(numberOfQuestion).fill('');
  q = q.map((e, i) => {
    return {
      key: i,
      ...generateQuestion(difficulty, i)
    };
  });
  return q;
}

export function generateQuestion (difficulty = 0) {
  const operators = [
    ['-', '+'],
    ['-', '+', '*'],
    ['-', '+', '*', '/'],
  ];
  let max = 10;
  let min = difficulty * 5;
  const o = Math.floor(Math.random() * operators[difficulty].length);
  const operator = operators[difficulty][o];
  const isDivision = operator === '/';

  let a = 1 + min + Math.floor(Math.random() * (isDivision ? max + 5 : max));
  let b = 1 + min + Math.floor(Math.random() * (isDivision ? max - 5 : max));
  if (isDivision) {
    a = a*b;
  }
  // return `${a} ${operator} ${b} = ` + eval(`${a} ${operator} ${b}`);
  return {
    a, b, o: operator === '*' ? 'x' : operator, answer: eval(`${a} ${operator} ${b}`)
  };
}
