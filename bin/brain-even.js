#!/usr/bin/env node
import { greetUser, startGame, getRandomInt } from '../src/index.js';

const rule = 'even';
const cons = [];
const res = [];
for (let i = 0; i < 3; i += 1) {
  cons.push(getRandomInt(100));
  res.push(cons[i] % 2 === 0 ? 'yes' : 'no');
}
startGame(cons, res, greetUser(rule));
