function Accumulator(startingValue) {
    this.value = startingValue;
    this.read()
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();
alert(accumulaor.value);
//accumaulator.showValue();
