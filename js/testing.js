"use strict";
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
    
        // удалить, если за пределами интервала
        if (val < a || val > b) {
          arr.splice(i, 1);
          i--;
        }
      }
}

let arr = [5, 3, 8, 1, 4, 1, 10, 0, 55, -15, 2, 0, 0, 0, 0, 0, 3, 3];

filterRangeInPlace(arr, 1, 4);
alert( arr ); // 5,3,8,1 (без изменений)
