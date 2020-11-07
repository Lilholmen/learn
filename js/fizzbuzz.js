const fizzbuzz = (n) => {
  let f = 'fizz';
  let b = 'buzz';

  for (let i = 1; i <= n; i++) {
    console.log(
      i % 3 === 0 && i % 5 === 0 ? f + b : i % 3 === 0 ? f : i % 5 === 0 ? b : i
    );
  }
};

fizzbuzz(+prompt('Укажите интевал', 3));
