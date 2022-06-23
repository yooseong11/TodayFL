const frontlineList = ["제압", "봉바", "쇄빙", "온살"]


const getFLturn = (firstDay, secondDay) => {
	return FLtrun = Math.abs(secondDay.diff(firstDay,'days') % frontlineList.length)
}

const getTodayturn = () => {
	const today = moment()
	const defalutDay = moment('2022-03-16')
	return getFLturn(today,defalutDay)
}

const getTomorrowTrun = (todayTurn) => {
	let tomorrowTurn = todayTurn + 1
	tomorrowTurn > frontlineList.length - 1 && (tomorrowTurn = 0)
	return tomorrowTurn
}

const getFLName = (int) => {
	return frontlineList[int]
}

const init = function() {
	const today = moment();
	const todayTurn = getTodayturn();
	const tomorrowTurn = getTomorrowTrun(todayTurn);
	
	document.getElementById("todayFL").textContent = getFLName(todayTurn);
	document.getElementById("tomorrowFL").textContent = getFLName(tomorrowTurn);
	document.getElementById("date").textContent = today.format("MM월 DD일");
}

init();
