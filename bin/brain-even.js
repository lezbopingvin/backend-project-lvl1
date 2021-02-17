#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greet from '../src/cli.js';

const name = greet();
const nums = [15, 6, 7];
console.log('Answer "yes" if the number is even, otherwise answer "no".');
for (let i = 0; i < 3; i += 1) {
  console.log(`Question: ${nums[i]}`);
  const ans = readlineSync.question('Answer: ');
  if (nums[i] % 2 === 0) {
    if (ans === 'yes') {
      console.log('Correct!');
    } else {
      console.log(`'${ans}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
      break;
    }
  } else if (ans === 'no') {
    console.log('Correct!');
  } else {
    console.log(`'${ans}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
    break;
  }
  if (i === 2) console.log(`Conratulation, ${name}!`);
}
