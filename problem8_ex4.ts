//未完成
import * as fs from 'fs';
import * as path from 'path';
const filepathA: string = path.join(__dirname, 'fileA.txt');
const filepathB: string = path.join(__dirname, 'fileB.txt');

function getFileContents(filepath: string): Promise<number> {
  return new Promise((resolve) => {
    fs.readFile(filepath, 'utf-8', (err, data) => {
      resolve(parseInt(data, 10));
    });
  });
}

//aを計算
//bを計算
//a*bを出力
