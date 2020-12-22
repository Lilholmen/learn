'use strict';

const suspectInfo = {
  James: ['Jacob', 'Bill', 'Lucas'],
  Johnny: ['David', 'Kyle', 'Lucas'],
  Peter: ['Lucy', 'Kyle'],
  Ron: ['Jacob', 'Bill', 'Lucas'],
  Harry: ['Jacob', 'Bill', 'Lucas'],
  Bob: ['Jacob', 'Lucas'],
};

const dead = ['Lucas', 'Bill'];

console.log(killerIs(suspectInfo, dead));
console.log(killerIs(suspectInfo, ['David']));
console.log(killerIs({}, dead));
console.log(killerIs(suspectInfo, []));
console.log(killerIs(suspectInfo, ['Fill']));

function killerIs(susInf, victims) {
  if (victims.length === 0) {
    return 'Nobody dead';
  }
  if (Object.keys(susInf).length === 0) {
    return 'We have no suspects';
  }

  let killer = '';

  for (let sus in susInf) {
    let meets = new Set(susInf[sus]);
    let meetCount = meets.size;

    for (let vic of victims) {
      meets.add(vic);
    }

    if (meetCount === meets.size) {
      killer += !killer ? sus : `, ${sus}`;
    }
  }

  return killer ? killer + '.' : "We haven't enough evidence";
}
