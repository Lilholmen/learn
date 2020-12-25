'use strict';

const str = ` Артур good, всё работает well!  `;
let encripted = str.trim();

encripted = encript(encripted, 1);

console.log(encripted);

encripted = decriptor(encripted, 1);

console.log(encripted);

function parseBigInt(str) {
  let temp = BigInt(
    str
      .split('')
      .map((letter) => {
        let to4 = letter.charCodeAt(0);
        return to4 > 999
          ? to4
          : to4 > 99
          ? `0${to4}`
          : to4 > 9
          ? `00${to4}`
          : `000${to4}`;
      })
      .join('')
  );
  return temp;
}

function to36Base(bigIntNum) {
  return bigIntNum.toString(36);
}

function encript(str, steps) {
  for (let i = 0; i < steps; i++) {
    str = to36Base(parseBigInt(str));
  }
  return str;
}

function decriptor(str, steps) {
  let jopa = [];
  let len = str.length - 1;
  let sas = str
    .split('')
    .map((letter) => BigInt(parseInt(letter, 36)))
    .reduce((acc, cur, index) => acc + cur * 36n ** BigInt(len - index), 0n)
    .toString(10);
  for (let i = 0; i < sas.length; i += 4) {
    jopa.push(sas.substring(i, i + 4));
  }
  jopa = jopa.map((code) => String.fromCharCode(code)).join('');

  return jopa;
}
