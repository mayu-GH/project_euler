'use strict';
//以下1000桁の数字の中で、隣接する13桁の数字のうち、最大の積を求める。

console.log(getGreatestProduct(13));

function getGreatestProduct(numberDigit) {
  const fs = require('fs');
  const arrayNumber = fs.readFileSync('./numbers.txt', 'utf-8').replace(/\r?\n/g, '').split('');
  let numberMax = 0;

  //13ずつ積を求める
  for (let i = 0; i < arrayNumber.length; i++) {
    const numberTmp = arrayNumber
      .slice(i, i + numberDigit)
      .reduce((accumulator, currentValue) => accumulator * currentValue);
    if (numberMax < numberTmp) {
      numberMax = numberTmp;
    }
  }

  return numberMax;
}
