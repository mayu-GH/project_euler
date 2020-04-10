console.log(Problem1());
console.log(Problem2());
console.log(Problem3());

//function ShowAnswer() {
//  document.writeln(Problem1(), "<br>");
//  document.writeln(Problem2(), "<br>");
//  document.writeln(Problem3(), "<br>");
//}

function Problem1() {
  var numSum = 0;
  var numCnt;
  var numOL = 0;

  for (numCnt = 1; 3 * numCnt < 1000; numCnt++) {
    numSum = numSum + numCnt * 3;
  }
  for (numCnt = 1; 5 * numCnt < 1000; numCnt++) {
    numSum = numSum + 5 * numCnt;
  }
  for (numCnt = 1; 15 * numCnt < 1000; numCnt++) {
    numOL = numOL + 15 * numCnt;
  }

  return "The answer of Problem 1 is " + (numSum - numOL);
}

function Problem2() {
  var numTerm = 0;
  var numCnt = 0;
  var arrayFS = new Array(1, 2);
  var numSum = 0;

  for (numCnt = 0; numTerm < 4000000; numCnt++) {
    numTerm = arrayFS[numCnt] + arrayFS[numCnt + 1];
    arrayFS.push(numTerm);
  }

  arrayFS.pop();
  numCnt = 0;

  while (numCnt <= arrayFS.length) {
    numTerm = arrayFS[numCnt];
    if (numTerm % 2 == 0) {
      numSum = numSum + numTerm;
    }
    numCnt++;
  }
  return "The answer of Problem 2 is " + numSum;
}

function Problem3() {
  var numPF;
  var arrayPF = new Array();
  const numHoge = 600851475143;
  var numTmp = numHoge;

  for (numPF = 2; numPF < Math.sqrt(numHoge); numPF++) {
    if (numTmp % numPF == 0) {
      arrayPF.push(numPF);
      numTmp = numTmp / numPF;
      if (numTmp == 1) {
        break;
      }
    }
  }
  return "The answer of Problem 3 is " + arrayPF.pop();
}
