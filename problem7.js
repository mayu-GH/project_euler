'use strict';
//10001番目の素数を求める

console.log(getPrimeNumber(10001));

function getPrimeNumber(numMaxLength) {
  let numTmp = 1;
  let counter = 0;

  while (counter <= numMaxLength) {
    if (isPrime(numTmp)) {
      counter++;
    }
    numTmp++;
  }

  return numTmp - 1;
}

function isPrime(numTmp, arrayPrime) {
  const numMax = Math.floor(Math.sqrt(numTmp));
  for (let i = 2; i <= numMax; i++) {
    if (numTmp % i === 0) {
      return false;
    }
  }
  return true;
}
