#!/usr/bin/env node
import { greetUser, startGame, getRandomInt } from '../src/index.js';

const rule = 'What number is missing in the progression?';
const cons = [];
const res = [];
for (let i = 0; i < 3; i += 1) {
  const seq = [getRandomInt(100)];
  const len = 5 + getRandomInt(16);
  const mis = getRandomInt(len);
  const step = getRandomInt(30);
  for (let j = 1; j < len; j += 1) {
    seq.push(seq[j - 1] + step);
  };
  res.push(seq[mis]);
  seq[mis] = '..';
  cons.push(seq.join(' '));
}
startGame(cons, res, greetUser(rule));
