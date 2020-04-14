'use strict';
//10001番目の素数を求める

console.log(GetPrimeNumber(10001));

function GetPrimeNumber(numMaxLength) {
  const arrayPrime = [2, 3, 5, 7, 11, 13];

  for (let numTmp = 14; arrayPrime.length < numMaxLength; numTmp++) {
    let blnPrime = true; //素数判定
    for (let numIndex = 0; numIndex < arrayPrime.length; numIndex++) {
      if (numTmp % arrayPrime[numIndex] === 0) {
        //何かしらで割り切れたら素数ではない
        blnPrime = false;
        break;
      }
    }
    if (blnPrime) {
      arrayPrime.push(numTmp);
    }
  }

  return arrayPrime[numMaxLength - 1];
}
