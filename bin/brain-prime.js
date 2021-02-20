#!/usr/bin/env node
import { greetUser, startGame } from '../src/cli.js';
import getRandomInt from '../src/index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const cons = [];
const res = [];
const isPrime = (num) => {
  for (let i = 2; i < Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};
for (let i = 0; i < 3; i += 1) {
  cons.push(getRandomInt(100));
  res.push(isPrime(cons[i]) ? 'yes' : 'no');
}
startGame(cons, res, greetUser(rule));
