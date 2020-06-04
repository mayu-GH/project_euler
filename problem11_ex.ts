import * as path from 'path';
import * as util from './util/file';

const filepath = path.join(__dirname, './grid.txt');

//結果を出力
util.readFile(filepath).then((contents) => {
  const numberArray: number[][] = makeArray(contents);
  console.log(
    Math.max(
      calcToDown(numberArray, 4),
      calcToRight(numberArray, 4),
      calcDiagonallyA(numberArray, 4),
      calcDiagonallyB(numberArray, 4)
    )
  );
});

//配列に入れる
function makeArray(contents: string): number[][] {
  const rowArray: string[] = contents.trim().split(/\r\n/);
  const returnArray: number[][] = new Array();
  for (let i = 0; i < rowArray.length; i++) {
    const tmpArray: number[] = rowArray[i].split(' ').map((value) => parseInt(value, 10));
    returnArray.push(tmpArray);
  }
  return returnArray;
}

//上下
function calcToDown(numberArray: number[][], times: number): number {
  let greatestProduct = 0;
  for (let i = 0; i < numberArray.length - times; i++) {
    for (let j = 0; j < numberArray.length; j++) {
      let tmp = 1;
      for (let k = 0; k < times; k++) {
        tmp = tmp * numberArray[i][j + k];
      }
      if (greatestProduct < tmp) {
        greatestProduct = tmp;
      }
    }
  }
  return greatestProduct;
}

//左右
function calcToRight(numberArray: number[][], times: number): number {
  let greatestProduct = 0;
  for (let i = 0; i < numberArray.length; i++) {
    for (let j = 0; j < numberArray.length - times; j++) {
      let tmp = 1;
      for (let k = 0; k < times; k++) {
        tmp = tmp * numberArray[i][j + k];
      }
      if (greatestProduct < tmp) {
        greatestProduct = tmp;
      }
    }
  }
  return greatestProduct;
}

//斜め
function calcDiagonallyA(numberArray: number[][], times: number): number {
  let greatestProduct = 0;
  for (let i = 0; i < numberArray.length - times; i++) {
    for (let j = 0; j < numberArray.length - times; j++) {
      let tmp = 1;
      for (let k = 0; k < times; k++) {
        tmp = tmp * numberArray[i + k][j + k];
      }
      if (greatestProduct < tmp) {
        greatestProduct = tmp;
      }
    }
  }
  return greatestProduct;
}

//斜め
function calcDiagonallyB(numberArray: number[][], times: number): number {
  let greatestProduct = 0;
  for (let i = times; i < numberArray.length; i++) {
    for (let j = 0; j < numberArray.length - times; j++) {
      let tmp = 1;
      for (let k = 0; k < times; k++) {
        tmp = tmp * numberArray[i - k][j + k];
      }
      if (greatestProduct < tmp) {
        greatestProduct = tmp;
      }
    }
  }
  return greatestProduct;
}
