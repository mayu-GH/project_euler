//n:偶数 → n/2
//n:奇数 → 3n＋１
//13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1(開始数13=>10の連鎖)
//100万以下の開始数の中で、最も長い連鎖ができる数は？

console.log(getLongestChain(1000000));

function getLongestChain(max: number): number {
  let longestChain = 0;
  let result: number;
  for (let i = 1; i <= max; i++) {
    const compareChain: number = countChain(i);
    if (longestChain < compareChain) {
      longestChain = compareChain;
      result = i;
    }
  }
  return result;
}

function countChain(value: number): number {
  let counter = 1;
  while (value !== 1) {
    if (value % 2 === 0) {
      value = value / 2;
    } else {
      value = 3 * value + 1;
    }
    counter++;
  }
  return counter;
}
