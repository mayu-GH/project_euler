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

//最大の累計を探す
function findMaximumTotal(triangle: number[][]): number {
  const tmpArray: number[][] = [];
  tmpArray[0] = triangle[0];
  for (let i = 1; i < triangle.length; i++) {
    tmpArray[i] = [0];
    for (let j = 0; j < triangle[i].length; j++) {
      //1行前かつ同列の値を加算
      const tmp: number = triangle[i][j] + tmpArray[i - 1][j];
      if (tmpArray[i][j] < tmp) {
        tmpArray[i][j] = tmp;
      }
      if (j + 1 === triangle[i].length) {
        //1行前かつ同列の値を、同列かつ次の行の値に加算
        break;
      } else {
        tmpArray[i][j + 1] = triangle[i][j + 1] + tmpArray[i - 1][j];
      }
    }
  }
  //最終行の中で最大の値を返す
  return Math.max.apply(null, tmpArray[tmpArray.length - 1]);
}
