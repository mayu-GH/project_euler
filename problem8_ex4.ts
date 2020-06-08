import * as fs from 'fs';
import * as path from 'path';
const filepathA: string = path.join(__dirname, 'fileA.txt');
const filepathB: string = path.join(__dirname, 'fileB.txt');

getFileContents(filepathA)
  .then(
    (valueA): Promise<number> => {
      return getFileContents(filepathB).then((valueB): number => {
        return valueA * valueB;
      });
    }
  )
  .then((result) => {
    console.log(result);
  });

function getFileContents(filepath: string): Promise<number> {
  return new Promise((resolve) => {
    fs.readFile(filepath, 'utf-8', (err, data) => {
      resolve(parseInt(data, 10));
    });
  });
}
