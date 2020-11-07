let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert(this.step);
  },
};

ladder.up();
ladder.up();
ladder.up();
ladder.down();
ladder.showStep();
ladder.down().down().showStep();
