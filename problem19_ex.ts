//1901年1月1日～2000年12月31日までの間に、月初めの日曜日はいくつある？
//発展課題：Dateを使わず解いてみる
const month30Days = [4, 6, 9, 11];
const month31Days = [1, 3, 5, 7, 8, 10, 12];
const dayOfWeekArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

console.log(countHowManySunday('19010101', '20001231'));

function countHowManySunday(start: string, end: string): number {
  let counter = 0;
  let tmpYear = parseInt(start.slice(0, 4));
  let tmpMonth = parseInt(start.slice(4, 6));
  let tmpDay = parseInt(start.slice(6, 8));
  let dayOfWeekIndex = 1; //1901年1月1日は月曜日
  const endYear = parseInt(end.slice(0, 4));
  const endMonth = parseInt(end.slice(4, 6));
  const endDay = parseInt(end.slice(6, 8));

  while (tmpYear <= endYear && tmpMonth <= endMonth && tmpDay <= endDay) {
    //曜日チェック
    if (dayOfWeekIndex === 0) {
      const tmpDate = new Date(Date.UTC(tmpYear, tmpMonth - 1, tmpDay));
      //console.log(tmpDate + ' : ' + tmpDate.getUTCDay());
      counter++;
    }
    //当月の日数を取得
    const dayCount = getHowManyDays(tmpYear, tmpMonth);
    //次の月初めの曜日を取得
    dayOfWeekIndex += dayCount % dayOfWeekArray.length;
    if (dayOfWeekIndex > dayOfWeekArray.length - 1) {
      dayOfWeekIndex = dayOfWeekIndex - dayOfWeekArray.length;
    }

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
function getHowManyDays(year: number, month: number): number {
  if (month30Days.includes(month)) {
    return 30;
  } else if (month31Days.includes(month)) {
    return 31;
  } else {
    //2月
    if (judgeLeapYear(year)) {
      return 29;
    } else {
      return 28;
    }
  }
}

//閏年判定
function judgeLeapYear(year: number): boolean {
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
