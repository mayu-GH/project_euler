//以下1000桁の数字の中で、隣接する13桁の数字のうち、最大の積を求める。
import * as fs from 'fs';

function getGreatestProduct(digit: number): number {
  let max = 0;

  fs.readFile('./numbers.txt', 'utf-8', (err, data) => {
    const arrayNumbers: number[] = data
      .replace(/\r?\n/g, '')
      .split('')
      .map((value) => parseInt(value, 10));

    //13ずつ積を求める
    for (let i = 0; i < arrayNumbers.length; i++) {
      const temporary: number = arrayNumbers
        .slice(i, i + digit)
        .reduce((accumulator, currentValue) => accumulator * currentValue);
      if (max < temporary) {
        max = temporary;
      }
    }
  });
  return max;
}

console.log(getGreatestProduct(13));
