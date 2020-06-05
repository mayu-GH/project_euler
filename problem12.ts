//自然を足してつくられる数列のうち、500を超える約数を持つ最小の数は？
console.log(getFirstTriangleNumber(500));

function getFirstTriangleNumber(divisorCount: number) {
  let addingNumber = 0;
  let resultCount = 0;
  for (let i = 1; resultCount < divisorCount; i++) {
    addingNumber = addingNumber + i;
    resultCount = getDivisorCount(addingNumber);
  }
  return addingNumber;
}

function getDivisorCount(addingNumber: number): number {
  let divisorCount = 0;
  for (let i = 1; i < Math.sqrt(addingNumber); i++) {
    if (addingNumber % i === 0) {
      divisorCount++;
    }
  }
  return 2 * divisorCount;
}
