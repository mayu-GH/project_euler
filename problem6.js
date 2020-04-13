'use strict';
//1-100までの"2乗の和"と"和の2乗"の差を求める

function GetNumSS(numFirst, numLast) {
  //和の2乗
  const numSumSquare = Math.pow((numLast * (numFirst + numLast)) / 2, 2);
  //2乗の和
  let numSquareSum = 0;

  for (let numCnt = numFirst; numCnt <= numLast; numCnt++) {
    numSquareSum += Math.pow(numCnt, 2);
  }

  console.log(numSumSquare - numSquareSum);
}

GetNumSS(1, 100);
