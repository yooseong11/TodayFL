const frontlineList = ["제압", "봉바", "쇄빙", "온살"]


const getFLturn = (wantToKnowDay, defaultDay) => {
	return (FLtrun = Math.abs(
    defaultDay.diff(wantToKnowDay, "days") % frontlineList.length
  ));
}

const getTodayturn = () => {
	const today = moment()
	const defalutDay = moment('2022-03-16')
	return getFLturn(today, defalutDay)
}

const getTomorrowTrun = (defaultTurn) => {
	let tomorrowTurn = defaultTurn + 1

	if (tomorrowTurn > frontlineList.length - 1) {
		tomorrowTurn = 0
	}

	return tomorrowTurn
}

const getFLName = (int) => {
	return frontlineList[int]
}

const changeUI = function (todayFL, tomorrowFL) {
  document.getElementById("todayFL").textContent = todayFL;
  document.getElementById("tomorrowFL").textContent = tomorrowFL;
};

const onChangeDateInput = function (e) {
  const changedDay = e.target.value;
  const defalutDay = moment("2022-03-16");
  const selectedTurn = getFLturn(changedDay, defalutDay);
  const selectedTmrTrun = getTomorrowTrun(selectedTurn);
  changeUI(getFLName(selectedTurn), getFLName(selectedTmrTrun));
};

const init = function() {
	const today = moment();
	const dateUI = document.getElementById("date")
	dateUI.value =today.format("yyyy-MM-DD");
	
	const todayTurn = getTodayturn();
	const tomorrowTurn = getTomorrowTrun(todayTurn);
	changeUI(getFLName(todayTurn), getFLName(tomorrowTurn));
	dateUI.addEventListener("change", onChangeDateInput);
}

init();


