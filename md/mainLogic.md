# MainLogic

## 특정 날짜의 전장 순서를 구하는 로직

```jsx
const frontlineList = ["제압", "봉바", "쇄빙", "온살"]

const getFLturn = (wantToKnowDay, defaultDay) => {
	return (FLtrun = Math.abs(
    defaultDay.diff(wantToKnowDay, "days") % frontlineList.length
  ));
}

const getFLName = (int) => {
	return frontlineList[int]
}
```

4일 기준으로 전장이 바뀌기 때문에 오늘이 ‘제압’이면 4일뒤에도 ‘제압’이다. 3일뒤면 ‘쇄빙’이다.
**즉 (특정기준으로 지난 날) % 4(전장 맵 개수)**가 전장 리스트의 순서다.

특정 기준 지난 날은 `moment.js` 에 날짜 두 개를 빼는 메서드 `.diff`로, 전장 맵의 개수는 배열 개수를 구하는 `.length` 로 구했다. 

`getFLName` 함수를 통해 거기서 얻은 순서는 다시 이름으로 반환했다.

### 오늘과 내일 순서 구하기

```jsx
const getTodayturn = () => {
	const today = moment()
	const defalutDay = moment('2022-03-16')
	return getFLturn(today, defalutDay)
}

const getTomorrowTrun = (defaultTurn) => {
	let tomorrowTurn = defaultTurn + 1
	tomorrowTurn > frontlineList.length - 1 && (tomorrowTurn = 0)
	return tomorrowTurn
}
```

전장 해당 로테이션 제도를 도입한 날 기준으로 돌아간다. 대체 그 날이 언제인지 찾을 수가 없었다. 어차피 나눗셈을 한 나머지 값이 필요한 로직이라 정확한 날짜는 필요 없었다. 그래서 임의의 defaultDay를 지정했다.

이때 이름이 아닌 **순서**만 반환했다. 즉 “제압” 과 같은 string이 아닌 0과 같은 int로 반환했다. 이유는 내일의 전장도 알려주는 UI 때문이다. 다음 날짜의 전장 순서를 구하려면 int같은 경우는 +1만 해주면 된다. int 값이 전장 개수보다 큰 예외 경우는 값을 0으로 만든다.

만약 내일 전장을 구하는 로직에 “제압”같은 인자가 들어오면 다시 list를 순회하며 몇 번째 순서인지 찾아내어 다음 순서의 요소를 반환해야하는 복잡한 과정이 생긴다. 이를 위해 굳이 순서와 이름 얻기를 분리해서 함수를 짰다. 

### `<input type=”date”>` 를 사용해서 선택된 날짜의 순서 구하기

```jsx
//popup.html

<input id="date" type="date" class="text-sm text-slate-700 bg-transparent" />

//main.js
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

dateUI.addEventListener("change", onChangeDateInput);
```

특정 날짜의 전장도 알게 해달라는 추가 요구사항이 들어왔다. [맨 처음 적은 코드](https://github.com/meteor-or/TodayFL/blob/52eb88afea681fa8f641daa4fe339e3f0b838bbb/js/main.js)는 다시 볼 때 고생했는데, 이번 코드는 다시봐도 충분히 이해도 가고 추가사항을 적용하기도 어렵지 않았다. UI를 바꾸는 함수만 추가적으로 만들어서 적용했다.