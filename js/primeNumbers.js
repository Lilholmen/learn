'use strict';

const MAX_VALUE = 10000;
const MIN_VALUE = 1;

start: for (let i = MIN_VALUE; i <= MAX_VALUE; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) continue start;
  }
  console.log(i);
}
