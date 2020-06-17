import * as util from './util/file';
import * as path from 'path';
const filepath = path.join(__dirname, 'problem18_triangle.txt');

util.readFile(filepath).then((contents) => {
  const triangle: number[][] = makeArray(contents);
  console.log(findMaximumTotal(triangle));
});

//配列に入れる
function makeArray(contents: string): number[][] {
  const result: number[][] = [];
  const stringArray: string[] = contents.trim().split(/\r?\n/);
  for (let i = 0; i < stringArray.length; i++) {
    const tmp: number[] = stringArray[i].split(' ').map((value) => parseInt(value, 10));
    result.push(tmp);
  }
  return result;
}

////最大の累計を探す
//function findMaximumTotal(triangle: number[][]): number {
//  let total = triangle[0][0]; //最初の値
//  let j = 0; //最初の列
//
//  for (let i = 1; i < triangle.length; i++) {
//    //次の行の同じ列と次の列の値を比較
//    //大きいほうをtotalに加算
//    if (triangle[i][j] > triangle[i][j + 1]) {
//      total += triangle[i][j];
//    } else {
//      total += triangle[i][j + 1];
//      j++;
//    }
//  }
//
//  return total;
//}

//最大の累計を探す
function findMaximumTotal(triangle: number[][]): number {
  let total = triangle[0][0]; //最初の値
  let j = 0; //最初の列
  let maxTotal = 0;

  //全ルート総当たり
  for (let i = 1; i < triangle.length; i++) {}

  return total;
}
