'use strict';
//10001番目の素数を求める

console.log(getPrimeNumber(10001));

function getPrimeNumber(numMaxLength) {
  const arrayPrime = [2, 3, 5, 7, 11, 13];
  let numTmp = 14;

  while (arrayPrime.length < numMaxLength) {
    if (arrayPrime.some((element) => numTmp % element === 0)) {
    } else {
      arrayPrime.push(numTmp);
    }
    numTmp++;
  }

  return arrayPrime[numMaxLength - 1];
}
