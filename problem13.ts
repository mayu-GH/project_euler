//100個の50桁の数字の和の最初の10桁を求める
//下10桁ではなく上10桁
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
  const result: number[][] = [];

  //下1桁から
  for (let i = 0; i < stringArray.length; i++) {
    const tmp: number[] = [];
    for (let j = stringArray[i].length - 1; 0 <= j; j--) {
      tmp.push(parseInt(stringArray[i].charAt(j), 10));
    }
    result.push(tmp);
  }
  return result;
}

//加算する
function sumNumbers(numberArray: number[][]): number[] {
  const sumArray: number[] = [];

  //各桁の合計値
  for (let i = 0; i < numberArray.length; i++) {
    for (let j = 0; j < numberArray[i].length; j++) {
      if (isNaN(sumArray[j])) {
        sumArray[j] = 0;
      }
      sumArray[j] += numberArray[i][j];
    }
  }

  const result: number[] = [];

  //繰り上がり計算
  for (let k = 0; k < sumArray.length; k++) {
    if (isNaN(result[k])) {
      result[k] = 0;
    }
    const tmp = result[k] + sumArray[k];
    result[k] = tmp % 10;
    if (tmp >= 10) {
      result[k + 1] = Math.floor(tmp / 10);
    }
  }

  //上1桁繰り上げ
  let digit = String(result[result.length - 1]).length;

  while (digit !== 1) {
    const lastIndex = result.length - 1;
    const lastValue = result[lastIndex];
    result[lastIndex] = lastValue % 10;
    result[lastIndex + 1] = Math.floor(lastValue / 10);
    digit = String(result[lastIndex + 1]).length;
  }

  return result.reverse().slice(0, 10);
}
