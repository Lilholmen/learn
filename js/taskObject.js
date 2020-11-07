function isEmpty(checkIt) {
  for (let props in checkIt) {
    return false;
  }
  return true;
}
function summary(players) {
  let sum = 0;
  for (let player in players) {
    sum += players[player];
  }
  return sum;
}
function multiplyNumeric(obj) {
  for (let prop in obj) {
    if (typeof obj[prop] == 'number') {
      obj[prop] *= 2;
    }
  }
}

let user = {};
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let techData = {
  width: 500,
  height: 100,
  name: 'one One',
};

user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

console.log(isEmpty(user));
delete user.surname;
console.log(isEmpty(user));
console.log(summary(salaries));
multiplyNumeric(techData);
console.log(techData);
