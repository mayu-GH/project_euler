//以下1000桁の数字の中で、隣接する13桁の数字のうち、最大の積を求める。
import * as fs from 'fs';

function readFile(fileName: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf-8', (err, data) => {
      err ? reject(err) : resolve(data);
    });
  });
}

let x = 0;

function setTimeoutPromise(): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('5秒だったよ');
      x = 10;
      resolve(x);
    }, 5000);
  });
}

setTimeoutPromise().then((result) => {
  console.log('result:' + result);
});

function getGreatestProductPromise(digit: number): Promise<number> {
  return readFile('./numbers.txt').then((data: string) => {
    let max = 0;
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
    return max;
  });
}

getGreatestProductPromise(13).then((answer) => {
  console.log(answer);
});

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

//console.log(getGreatestProduct(13));
