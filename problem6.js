'use strict';
//1-100までの"2乗の和"と"和の2乗"の差を求める
let numSquareSum = 0;
let numSumSquare = 0;

for (let numCnt = 1; numCnt <= 100; numCnt++) {
  numSquareSum = numSquareSum + numCnt * numCnt;
  numSumSquare = numSumSquare + numCnt;
}

console.log(numSumSquare * numSumSquare - numSquareSum);
