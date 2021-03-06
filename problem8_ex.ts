//以下1000桁の数字の中で、隣接する13桁の数字のうち、最大の積を求める。
//const fs = require('fs'); // js
import * as fs from 'fs'; // typescript

console.log(getGreatestProduct(13));

function getGreatestProduct(numberDigit: number) {
  const arrayNumber = fs
    .readFileSync('./numbers.txt', 'utf-8')
    .replace(/\r?\n/g, '')
    .split('')
    .map((value) => parseInt(value, 10));
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
