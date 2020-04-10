//３桁の数字２つで作る最大の回文数
'use strict';
let numResult = 10001; //最小の回文数

for (let num1 = 999; num1 >= 100; num1--) {
  for (let num2 = 999; num2 >= 100; num2--) {
    let strObverse = String(num1 * num2);
    let strReverse = strObverse.split('').reverse().join('');
    if (strObverse == strReverse) {
      if (numResult < parseInt(strObverse)) {
        numResult = parseInt(strObverse);
      }
    }
  }
}

console.log(numResult);
