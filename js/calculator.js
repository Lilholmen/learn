function Calculator() {
  this.a = null;
  this.b = null;

  this.read = function () {
    this.a = Number(prompt('Введите первое число'));
    this.b = Number(prompt('Введите второе число'));
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();
alert(calculator.sum());
alert(calculator.mul());
