import { greetUser, startGame } from '../cli.js';
import getRandomInt from '../index.js';

export default () => {
const gcd = (a, b) => {
  const iter = (m, n) => {
    if (m === 0 || n === 0 || n === m) {
      return ((m === 0) ? n : m);
    }
    if (m === 1 || n === 1) {
      return ((m === 1) ? m : n);
    }
    if ((m % 2 === 0) && (n % 2 === 0)) {
      return (2 * iter(m / 2, n / 2));
    }
    if ((m % 2 === 0) || (n % 2 === 0)) {
      if ((m % 2) === 0) {
        return iter((m / 2), n);
      }
      return iter(m, (n / 2));
    }
    if (m > n) {
      return iter(((m - n) / 2), n);
    }
    return iter(((n - m) / 2), m);
  };
  return iter(a, b);
};
const rule = 'Find the greatest common divisor of given numbers.';
const cons = [];
const res = [];
for (let i = 0; i < 3; i += 1) {
  const a = getRandomInt(100);
  const b = getRandomInt(100);
  cons.push(`${a} ${b}`);
  res.push(gcd(a, b).toString());
}
startGame(cons, res, greetUser(rule));
}
