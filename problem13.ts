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
  let result: number[][] = new Array();
  for (let i = 0; i < stringArray.length; i++) {
    let tmp: number[] = new Array();
    for (let j = 0; j < stringArray[i].length; j++) {
      tmp.push(parseInt(stringArray[i].slice(j, j + 1), 10));
    }
    result.push(tmp);
  }
  return result;
}

//加算する
function sumNumbers(numberArray: number[][]): number[] {
  let sumArray: number[] = new Array();

  //各桁の合計値
  for (let j = 0; j < numberArray[0].length; j++) {
    let sum = 0;
    for (let i = 0; i < numberArray.length; i++) {
      sum += numberArray[i][j];
    }
    sumArray.push(sum);
  }

  sumArray = sumArray.reverse();
  let result: number[] = new Array();
  result[0] = 0;

  //繰り上がり計算
  for (let k = 0; k < sumArray.length; k++) {
    let tmp = result[k] + sumArray[k];
    result[k] = tmp % 10;
    result[k + 1] = Math.floor(tmp / 10);
  }

  //上1桁繰り上げ
  if (!(result[result.length - 1] % 10 === 0)) {
    let tmp = result[result.length - 1];
    result[result.length - 1] = tmp % 10;
    result[result.length] = Math.floor(tmp / 10);
  }

  return result.reverse().slice(0, 10);
}
