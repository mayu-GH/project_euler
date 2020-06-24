//1901年1月1日～2000年12月31日までの間に、月初めの日曜日はいくつある？

console.log(checkHowManyDays('19010101', '20001231'));

function checkHowManyDays(start: string, end: string): number {
  let counter = 0;
  let tmpYear = parseInt(start.slice(0, 4));
  let tmpMonth = parseInt(start.slice(4, 6));
  let tmpDay = parseInt(start.slice(6, 8));
  const endYear = parseInt(end.slice(0, 4));
  const endMonth = parseInt(end.slice(4, 6));
  const endDay = parseInt(end.slice(6, 8));

  while (tmpYear <= endYear && tmpMonth <= endMonth && tmpDay <= endDay) {
    //月初めだったら曜日チェックを行う
    if (tmpDay === 1) {
      const tmpDate = new Date(Date.UTC(tmpYear, tmpMonth - 1, tmpDay));
      if (tmpDate.getUTCDay() === 0) {
        counter++;
      }
    }
    //次の月へ
    if (tmpMonth === 12) {
      tmpDay = 1;
      tmpMonth = 1;
      tmpYear++;
    } else {
      tmpMonth++;
    }
  }
  return counter;
}
