"use strict";
function topSalary(obj) {
    let topSal = [null, 0];

    for(let [name, salary] of Object.entries(obj)) {
        if(salary > topSal[1]) {
            topSal = [name, salary];
        }
    }
    
    return topSal[0];
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

alert( topSalary(salaries) );
