"use strict";
function Calculator(str) {

    this.methods = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
    };

    this.calculate = function(str) {
        let argsArr = str.split(' ');
        let a = +argsArr[0];
        let b = +argsArr[2];
        let doThat = argsArr[1];

        if(isNaN    (a) || isNaN(b) || !this.methods[doThat]){
            return 'Input Error';
        }

        return this.methods[doThat](a, b);
    }

    this.addMethod = function(name, func) {
        this.methods[name] = func;;
    }
}

let powerCalc = new Calculator;

powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate(prompt('что вам посчитать?'));
alert( result ); // 8
