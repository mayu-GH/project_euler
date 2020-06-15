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
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
];
const numbersB = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const numbersC = ['hundred', 'thousand'];

function countHowManyLetters(start: number, end: number) {
  let counter = 0;
  if (1 <= start && end <= 1000) {
    for (let i = start; i <= end; i++) {
      if (i < 20) {
        counter += returnLengthUnder20(i);
      } else if (20 <= i && i < 100) {
        counter += returnLengthUnder100(i);
      } else if (100 <= i && i < 1000) {
        counter += returnLengthUnder1000(i);
      } else if (1000 <= i && i < 10000) {
        counter += returnLength10000(i);
      }
    }
  }
  return counter;
}

//1～19
function returnLengthUnder20(value: number): number {
  return numbersA[value - 1].length;
}

//20～99
function returnLengthUnder100(value: number): number {
  let counter = 0;
  if (value % 10 === 0) {
    counter = numbersB[value / 10 - 2].length;
  } else {
    counter = numbersB[Math.floor(value / 10) - 2].concat(numbersA[(value % 10) - 1]).length;
  }
  return counter;
}

//100～999
function returnLengthUnder1000(value: number): number {
  let counter = 0;
  if (value % 100 === 0) {
    counter = numbersA[value / 100 - 1].concat(numbersC[0]).length;
  } else {
    counter = numbersA[Math.floor(value / 100) - 1].concat(numbersC[0]).length;
    const tmp = parseInt(String(value).slice(1, 3), 10);
    if (tmp < 20) {
      counter += 'and'.length + returnLengthUnder20(tmp);
    } else {
      counter += 'and'.length + returnLengthUnder100(tmp);
    }
  }
  return counter;
}

//1000
function returnLength10000(value: number): number {
  return numbersA[value / 1000 - 1].concat(numbersC[1]).length;
}

console.log(countHowManyLetters(1, 1000));
