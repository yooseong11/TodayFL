const frontlineList = ["제압", "봉바", "쇄빙", "온살"]

const getFLturn = (firstDay, secondDay) => {
	const FLtrun = Math.abs(secondDay.diff(firstDay,'days') % 4)
	return FLtrun
}
const today = moment()
const defalutDay = moment('2022-03-16')
const todayTurn = getFLturn(today,defalutDay)

const getFLName = (int) => {
	return frontlineList[int]
}

document.querySelector("#todayFL").textContent = getFLName(todayTurn)
document.querySelector("#tomorrowFL").textContent = getFLName(todayTurn + 1)
document.querySelector("#date").textContent = today.format('MM월 D일')