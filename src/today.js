import { frontlineList, defalutDate, elementID } from './data.js';
import * as dayjs from 'dayjs';

const getFLturn = (wantToKnowDay, defaultDay) => {
  return Math.abs(defaultDay.diff(wantToKnowDay, 'day') % frontlineList.length);
};

const getTodayturn = () => {
  const today = dayjs();
  const defalutDay = dayjs(defalutDate);

  return getFLturn(today, defalutDay);
};

const getTomorrowTrun = (defaultTurn) => {
  let tomorrowTurn = defaultTurn + 1;

  if (tomorrowTurn > frontlineList.length - 1) {
    tomorrowTurn = 0;
  }

  return tomorrowTurn;
};

const getFLName = (int) => {
  return frontlineList[int];
};

const changeUI = function (todayFL, tomorrowFL) {
  document.getElementById(elementID.todayFL).textContent = todayFL;
  document.getElementById(elementID.tomorrowFL).textContent = tomorrowFL;
};

const onChangeDateInput = function (e) {
  const changedDay = e.target.value;
  const defalutDay = dayjs('2022-03-16');

  const selectedTurn = getFLturn(changedDay, defalutDay);
  const selectedTmrTrun = getTomorrowTrun(selectedTurn);
  changeUI(getFLName(selectedTurn), getFLName(selectedTmrTrun));
};

const init = function () {
  const today = dayjs();

  const initDateInput = function () {
    const dateUI = document.getElementById(elementID.dateInput);
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
