import { frontlineList, defalutDate, elementID } from './data';
import dayjs from 'dayjs';

type dayType = dayjs.Dayjs

const getFLturn = (wantToKnowDay: dayType, defaultDay: dayType) => {
  return Math.abs(defaultDay.diff(wantToKnowDay, 'day') % frontlineList.length);
};

const getTodayturn = () => {
  const today = dayjs();
  const defalutDay = dayjs(defalutDate);

  return getFLturn(today, defalutDay);
};

const getTomorrowTrun = (defaultTurn: number) => {
  let tomorrowTurn = defaultTurn + 1;

  if (tomorrowTurn > frontlineList.length - 1) {
    tomorrowTurn = 0;
  }

  return tomorrowTurn;
};

const getFLName = (int: number) => {
  return frontlineList[int];
};

const changeUI = function (todayFL: string, tomorrowFL: string) {
  document.getElementById(elementID.todayFL).textContent = todayFL;
  document.getElementById(elementID.tomorrowFL).textContent = tomorrowFL;
};

const onChangeDateInput = function (e: Event) {
  const InputTarget = e.currentTarget as HTMLInputElement;
  const changedValue = InputTarget.value;
  
  const changedDay = dayjs(changedValue)
  const defalutDay = dayjs('2022-03-16');

  const selectedTurn = getFLturn(changedDay, defalutDay);
  const selectedTmrTrun = getTomorrowTrun(selectedTurn);
  changeUI(getFLName(selectedTurn), getFLName(selectedTmrTrun));
};

const init = function () {
  const today = dayjs();

  const initDateInput = function () {
    const dateUI = document.getElementById(elementID.dateInput) as HTMLInputElement;
    dateUI.value = today.format('YYYY-MM-DD');
    dateUI.addEventListener('change', onChangeDateInput);
  };
  initDateInput();

  const initFLText = function () {
    const todayTurn = getTodayturn();
    const tomorrowTurn = getTomorrowTrun(todayTurn);
    changeUI(getFLName(todayTurn), getFLName(tomorrowTurn));
  };
  initFLText();
};

init();
