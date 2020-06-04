//未完成
import * as fs from 'fs';
import * as path from 'path';
const filepathA: string = path.join(__dirname, 'fileA.txt');
const filepathB: string = path.join(__dirname, 'fileB.txt');

//promise使う意味
getFileContents(filepathA).then((valueA) => {
  getFileContents(filepathB).then((valueB) => {
    console.log(valueA * valueB);
  });
});

function getFileContents(filepath: string): Promise<number> {
  return new Promise((resolve) => {
    fs.readFile(filepath, 'utf-8', (err, data) => {
      resolve(parseInt(data, 10));
    });
  });
}
