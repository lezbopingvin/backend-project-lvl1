import readlineSync from 'readline-sync';

export const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
export const greetUser = (rule) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  switch (rule) {
    case 'even':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
    case 'calc':
      console.log('What is the result of the expression?');
      break;
    default:
      break;
  }
  return name;
};
export const startGame = (cond, res, name) => {
  for (let i = 0; i < 3; i += 1) {
    console.log(`Question: ${cond[i]}`);
    const ans = +readlineSync.question('Answer: ');
    if (ans === res[i]) {
      console.log('Correct!');
    } else {
      console.log(`'${ans}' is wrong answer ;(. Correct answer was '${res[i]}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Conratulation, ${name}!`);
};