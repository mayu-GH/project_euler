//2000,000以下のすべての素数の合計を求める

function isPrime(check: number): boolean {
  const max = Math.floor(Math.sqrt(check));
  for (let i = 2; i <= max; i++) {
    if (check % i === 0) {
      return false;
    }
  }
  return true;
}

function getSumAllPrimes(below: number): number {
  let sumPrimes = 0;
  for (let i = 2; i <= below; i++) {
    if (isPrime(i)) {
      sumPrimes += i;
    }
  }
  return sumPrimes;
}

console.log(getSumAllPrimes(2000000));
