'use strict';

class Cript {
  constructor() {
    this.text = '';

    this.getInput = function (str) {
      this.text = String(str.trim());
    };

    this.logText = function () {
      console.log(this.text);
    };

    this.parseBigInt = function () {
      this.text = BigInt(
        this.text
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
    };

    this.to36Base = function () {
      this.text = this.text.toString(36);
    };

    this.encript = function (steps) {
      for (let i = 0; i < steps; i++) {
        this.parseBigInt();
        this.to36Base();
      }
    };

    this.decript = function (steps) {
      let arrUTF = [];
      let len = this.text.length - 1;
      this.text = this.text
        .split('')
        .map((letter) => BigInt(parseInt(letter, 36)))
        .reduce((acc, cur, index) => acc + cur * 36n ** BigInt(len - index), 0n)
        .toString(10);
      for (let i = 0; i <= this.text.length; i += 4) {
        arrUTF.push(this.text.substring(i, i + 4));
      }

      this.text = arrUTF.map((code) => String.fromCharCode(code)).join('');
    };

    this.run = function () {
      this.getInput(' Артур good, всё работает well!✏  ');
      this.logText();
      this.encript(1);
      this.logText();
      this.decript(1);
      this.logText();
    };
  }
}

const test = new Cript();
