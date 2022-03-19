
		let 오늘전장 = ""
		const today = moment()
		const getFrontline = () => {
			const defalutDay = moment('2022-03-16')
			
			let data = today.diff(defalutDay,'days') % 4
			switch (data) {
				case 0:
					오늘전장 = "제압"
					break;
			
				case 1:
					오늘전장 = "봉바"
					break;

				case 2:
					오늘전장 = "쇄빙"
					break;

				case 3:
					오늘전장 = "온살"
					break;

				default:
					break;
			}
			return 오늘전장
		}
		getFrontline()
		document.querySelector("#frontline").innerText = 오늘전장
		document.querySelector("#date").innerText = today.format('YYYY년 MM월 D일')