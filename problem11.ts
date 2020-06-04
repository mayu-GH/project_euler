//下の20×20のグリッドでは、対角線に沿って4つの数字が赤で表示されています。
//20×20のマス目で、同じ方向（上下左右斜め）に隣接する4つの数字の最大積はどれか。
import * as fs from 'fs';
import * as path from 'path';

const filepath = path.join(__dirname, './grid.txt');

//結果を出力
readFile().then((contents) => {
  const numberArray: number[][] = makeArray(contents);
  console.log(
    Math.max(
      calcToDown(numberArray),
      calcToRight(numberArray),
      calcDiagonallyA(numberArray),
      calcDiagonallyB(numberArray)
    )
  );
});

//ファイルを読む
function readFile(): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf-8', (err, data) => {
      resolve(data);
    });
  });
}

//配列に入れる
function makeArray(contents: string): number[][] {
  const rowArray: string[] = contents.split(/\r\n/);
  let returnArray: number[][] = new Array();
  for (let i = 0; i < rowArray.length - 1; i++) {
    let tmpArray: number[] = rowArray[i].split(' ').map((value) => parseInt(value, 10));
    returnArray[i] = [];
    for (let j = 0; j < tmpArray.length; j++) {
      returnArray[i][j] = tmpArray[j];
    }
  }
  return returnArray;
}

//上下
function calcToDown(numberArray: number[][]): number {
  let greatestProduct = 0;
  for (let i = 0; i < numberArray.length - 3; i++) {
    for (let j = 0; j < numberArray.length; j++) {
      let tmp = numberArray[i][j] * numberArray[i + 1][j] * numberArray[i + 2][j] * numberArray[i + 3][j];
      if (greatestProduct < tmp) {
        greatestProduct = tmp;
      }
    }
  }
  return greatestProduct;
}

//左右
function calcToRight(numberArray: number[][]): number {
  let greatestProduct = 0;
  for (let i = 0; i < numberArray.length; i++) {
    for (let j = 0; j < numberArray.length - 3; j++) {
      let tmp = numberArray[i][j] * numberArray[i][j + 1] * numberArray[i][j + 2] * numberArray[i][j + 3];
      if (greatestProduct < tmp) {
        greatestProduct = tmp;
      }
    }
  }
  return greatestProduct;
}

//斜め
function calcDiagonallyA(numberArray: number[][]): number {
  let greatestProduct = 0;
  for (let i = 0; i < numberArray.length - 3; i++) {
    for (let j = 0; j < numberArray.length - 3; j++) {
      let tmp = numberArray[i][j] * numberArray[i + 1][j + 1] * numberArray[i + 2][j + 2] * numberArray[i + 3][j + 3];
      if (greatestProduct < tmp) {
        greatestProduct = tmp;
      }
    }
  }
  return greatestProduct;
}

//斜め
function calcDiagonallyB(numberArray: number[][]): number {
  let greatestProduct = 0;
  for (let i = 3; i < numberArray.length; i++) {
    for (let j = 0; j < numberArray.length - 3; j++) {
      let tmp = numberArray[i][j] * numberArray[i - 1][j + 1] * numberArray[i - 2][j + 2] * numberArray[i - 3][j + 3];
      if (greatestProduct < tmp) {
        greatestProduct = tmp;
      }
    }
  }
  return greatestProduct;
}
