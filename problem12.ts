//自然を足してつくられる数列のうち、500を超える約数を持つ最小の数は？

console.log(getFirstTriangleNumber(500));

function getFirstTriangleNumber(divisorCount: number): number {
  let addingNumber = 0;
  let resultCount = 0;
  let i = 1;
  while (resultCount < divisorCount) {
    addingNumber = addingNumber + i;
    resultCount = getDivisorCount(addingNumber);
    i++;
  }
  return addingNumber;
}

function getDivisorCount(addingNumber: number): number {
  let divisorCount = 0;
  for (let i = 1; i <= Math.sqrt(addingNumber); i++) {
    if (addingNumber % i === 0) {
      if (addingNumber === i ** 2) {
        divisorCount--;
      }
      divisorCount += 2;
    }
  }
  return divisorCount;
}
