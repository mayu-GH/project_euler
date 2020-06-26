//1901年1月1日～2000年12月31日までの間に、月初めの日曜日はいくつある？
//発展課題：Dateを使わず解いてみる
const month30Days = [4, 6, 9, 11];
const month31Days = [1, 3, 5, 7, 8, 10, 12];

console.log(countHowManySunday('19010101', '20001231'));

function countHowManySunday(start: string, end: string): number {
  let counter = 0;
  const startYear = parseInt(start.slice(0, 4));
  const startMonth = parseInt(start.slice(4, 6));
  const startDay = parseInt(start.slice(6, 8));
  const endYear = parseInt(end.slice(0, 4));
  const endMonth = parseInt(end.slice(4, 6));
  const endDay = parseInt(end.slice(6, 8));

  //日、月、...、土にそれぞれ0~6を割り当て
  //1900年1月1日は月曜日
  let dayOfWeekNumber = 1;
  let tmpYear = 1900;
  let tmpMonth = 1;
  let tmpDay = 1;

  let startCount = false;

  while (tmpYear <= endYear && tmpMonth <= endMonth && tmpDay <= endDay) {
    //tmp=startとなったらカウント開始
    if (tmpYear === startYear && tmpMonth === startMonth && tmpDay === startDay) {
      startCount = true;
    }

    //曜日チェック
    if (dayOfWeekNumber === 0 && startCount) {
      counter++;
    }

    //tmpMonthの日数を取得
    const dayCount = getDaysOfMonth(tmpYear, tmpMonth);
    //次の月初めの曜日を取得
    dayOfWeekNumber = (dayOfWeekNumber + dayCount - tmpDay + 1) % 7;

    //次の月へ
    if (tmpMonth === 12) {
      tmpDay = 1;
      tmpMonth = 1;
      tmpYear++;
    } else {
      tmpDay = 1;
      tmpMonth++;
    }
  }
  return counter;
}

//日数取得
function getDaysOfMonth(year: number, month: number): number {
  if (month30Days.includes(month)) {
    return 30;
  } else if (month31Days.includes(month)) {
    return 31;
  } else {
    //2月
    if (isLeapYear(year)) {
      return 29;
    } else {
      return 28;
    }
  }
}

//閏年判定
function isLeapYear(year: number): boolean {
  if (year % 400 === 0) {
    return true;
  }
  if (year % 100 === 0) {
    return false;
  }
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}
