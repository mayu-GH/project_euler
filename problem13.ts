//100個の50桁の数字の和の最初の10桁を求める
import * as util from './util/file';
import * as path from 'path';
const filepath = path.join(__dirname, 'problem13.txt');

util.readFile(filepath).then((contents) => {
  const numberArray = makeArray(contents);
  console.log(sumNumbers(numberArray));
});

//配列に入れる
function makeArray(contents: string): number[][] {
  const stringArray: string[] = contents.trim().split(/\r?\n/);
  let resultArray: number[][] = new Array();
  for (let i = 0; i < stringArray.length; i++) {
    let tmp: number[] = new Array();
    for (let j = 0; j < 50; j++) {
      tmp.push(parseInt(stringArray[i].slice(j, j + 1), 10));
    }
    resultArray.push(tmp);
  }
  return resultArray;
}

//加算する
function sumNumbers(numberArray: number[][]) {
  let sumArray: number[] = new Array();
  let resultArray: number[] = new Array();

  for (let j = 0; j < 50; j++) {
    let sum = 0;
    for (let i = 0; i < 100; i++) {
      sum = sum + numberArray[i][j];
    }
    sumArray.push(sum);
  }

  const tmpArray = sumArray.reverse();
  resultArray[0] = 0;

  for (let k = 0; k < 50; k++) {
    let tmp = resultArray[k] + tmpArray[k];
    resultArray[k] = tmp % 10;
    if (k + 1 === 50) {
      break;
    }
    resultArray[k + 1] = Math.floor(tmp / 10);
  }

  return resultArray.slice(0, 10).reverse();
}
