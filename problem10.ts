//2000,000以下のすべての素数の合計を求める

console.log(getSumAllPrimes(2000000));

function getSumAllPrimes(below: number) {
  let sumPrimes: number = 0;

  for (let i = 2; i <= below; i++) {
    if (isPrime(i)) {
      sumPrimes += i;
    }
  }
  return sumPrimes;
}

function isPrime(check: number) {
  const max = Math.floor(Math.sqrt(check));
  for (let i = 2; i <= max; i++) {
    if (check % i === 0) {
      return false;
    }
  }
  return true;
}
