#!/usr/bin/env node
import { greetUser, startGame, getRandomInt } from '../src/index.js';

const rule = 'What is the result of the expression?';
const cons = [];
const res = [];
for (let i = 0; i < 3; i += 1) {
  const a = getRandomInt(100);
  const b = getRandomInt(100);
  const c = getRandomInt(3);
  switch (c) {
    case 0:
      cons.push(`${a} + ${b}`);
      res.push((a + b).toString());
      break;
    case 1:
      cons.push(`${a} - ${b}`);
      res.push((a - b).toString());
      break;
    case 2:
      cons.push(`${a} * ${b}`);
      res.push((a * b).toString());
      break;
    default:
      break;
  }
}
startGame(cons, res, greetUser(rule));
