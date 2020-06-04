import * as fs from 'fs';

export function readFile(filepath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf-8', (err, data) => {
      err ? reject(err) : resolve(data);
    });
  });
}
