function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    do {
      this.temp = this.value;
      this.value += +prompt('Сколько прибавить к начальному значению?', 0);
    } while (this.value !== this.temp);
  };
  this.displayValue = function () {
    alert(this.value);
  };
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.displayValue();
