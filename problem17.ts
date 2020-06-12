//1~1000を文字で書き起こしたら何文字か？
const numbersA = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirten',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
];
const numbersB = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const numbersC = ['hundred', 'thounsand'];

console.log(countHowManyLetters(1, 101));

function countHowManyLetters(start: number, end: number) {
  let counter = 0;
  for (let i = start; i <= end; i++) {
    if (i < 20) {
      counter += numbersA[i - 1].length;
    } else if (20 <= i && i < 100) {
      counter += returnLengthUnder100(i);
    } else if (100 <= i) {
      counter += returnLengthUnder1000(i);
    } else if (1000 <= i && i < 10000) {
      counter += returnLengthUnder10000(i);
    }
  }
  return counter;
}

function returnLengthUnder100(value: number): number {
  let counter = 0;
  if (value % 10 === 0) {
    counter = numbersB[value / 10 - 2].length;
  } else {
    counter = numbersB[Math.floor(value / 10) - 2].concat(numbersA[(value % 10) - 1]).length;
  }
  return counter;
}

function returnLengthUnder1000(value: number): number {
  let counter = 0;
  if (value % 100 === 0) {
    counter = numbersA[value / 100 - 1].concat(numbersC[0]).length;
  } else {
    counter = numbersA[Math.floor(value / 100) - 1].concat(numbersC[0]).length;
    const tmpValue = parseInt(String(value).slice(1, 3), 10);
    counter += returnLengthUnder100(tmpValue);
  }
  return counter;
}

function returnLengthUnder10000(value: number): number {
  let counter = 0;
  if (value % 1000 === 0) {
    counter = numbersA[value / 1000 - 1].concat(numbersC[1]).length;
  } else {
    counter = numbersA[Math.floor(value / 1000) - 1].concat(numbersC[1]).length;
    const tmp = parseInt(String(value).slice(1, 4), 10);
    counter += returnLengthUnder1000(tmp);
  }
  return counter;
}
