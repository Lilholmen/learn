'use strict';

const TEXT = 'текст super big massive text';
const DAYX = new Date(2021, 0, 1);
const MAXINT = Number.MAX_SAFE_INTEGER;
const MAXTIME = new Date(8640000000000000);

console.log(encript(TEXT)); // [1090, 1077, 1082, 1089, 1090]
console.log(DAYX.getTime()); // 1609 4484 0000 0
console.log(new Date(999999999999)); // Sun Sep 09 2001 05:46:39 GMT+0400 (Москва, летнее время)
console.log(MAXINT); //9007199254740991
console.log(MAXTIME); //8640 0000 0000 0000
console.log((8640000000000000).toString(2));
console.log(
  10901077108210891090101210510510504504504504540545405404414171n %
    1609448400000n
);
console.log(
  10901077108210891090101210510510504504504504540545405404414171n /
    1609448400000n
);

//2021

function encript(str) {
  return str.split('').map((letter) => letter.charCodeAt(0));
}
