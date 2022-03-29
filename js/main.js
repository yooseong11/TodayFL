const frontlineList = ["제압", "봉바", "쇄빙", "온살"]
const today = moment()
const defalutDay = moment('2022-03-16')


const getFLturn = (firstDay, secondDay) => {
	const FLtrun = Math.abs(secondDay.diff(firstDay,'days') % 4)
	return FLtrun
}
const getTomorrowTrun = (todayTurn) => {
	let tomorrowTurn = todayTurn + 1
	tomorrowTurn > frontlineList.length - 1 && (tomorrowTurn = 0)
	
	return tomorrowTurn
}
const getFLName = (int) => {
	return frontlineList[int]
}

const todayTurn = getFLturn(today,defalutDay)
const tomorrowTurn = getTomorrowTrun(todayTurn)
document.querySelector("#todayFL").textContent = getFLName(todayTurn)
document.querySelector("#tomorrowFL").textContent = getFLName(tomorrowTurn)
document.querySelector("#date").textContent = today.format('MM월 D일')