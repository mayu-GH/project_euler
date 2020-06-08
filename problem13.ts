//100個の50桁の数字の和の最初の10桁を求める
import * as util from './util/file';
import * as path from 'path';
const filepath = path.join(__dirname, 'problem13.txt');

util.readFile(filepath).then((contents) => {
  const numberArray: number[] = makeArray(contents);
  console.log(sumNumbers(numberArray));
});

//配列に入れる
function makeArray(contents: string): number[] {
  const numberArray: number[] = contents
    .trim()
    .split(/\r?\n/)
    .map((value) => parseInt(value, 10));
  return numberArray;
}

//加算する
function sumNumbers(numberArray: number[]): string {
  let sum = 0;
  for (let i = 0; i < numberArray.length; i++) {
    sum = sum + numberArray[i];
  }
  const sumString = sum.toString();
  return sumString.slice(sumString.length - 10);
}
