import * as fs from 'fs';
import * as path from 'path';
const filepathA = path.join(__dirname, 'fileA.txt');
const filepathB = path.join(__dirname, 'fileB.txt');

fs.readFile(filepathA, 'utf-8', (err, data) => {
  const answerA: number = parseInt(data, 10);
  fs.readFile(filepathB, 'utf-8', (err, data) => {
    const answerB = parseInt(data, 10);
    console.log(answerA * answerB);
  });
});
