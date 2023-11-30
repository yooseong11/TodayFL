export const frontlineList: FLType = {
  "ko": ['봉바', '쇄빙', '온살'],
  "en": ["Secure", "Seize", "Shatter", "Onsal"],
  "ja": ["制圧", "シルロ", "氷", "オンサル"]
}

interface FLType  {
  [key: string]: string[
  ]
}
export const elementID = {
  todayFL: "todayFL",
  tomorrowFL: "tomorrowFL",
  dateInput: "date",
  langMenu:"languages-menu"
};

export const defalutDate = '2023-11-01'; // 봉바

interface LocalesType  {
  [key: string]: {
    [key: string]: string
  }  
}

export const locales: LocalesType = {
  "en-US": {
    "순서": "Rotation",
    "오늘은?": "Today",
    "내일은?": "Tomorrow",
    "제압": "Secure",
    "봉바": "Seize",
    "쇄빙": "Shatter",
    "온살": "Onsal",
    "順序": "Rotation",
    "今日": "Today",
    "明日": "Tomorrow",
    "制圧": "Secure",
    "シルロ": "Seize",
    "氷": "Shatter",
    "オンサル": "Onsal"
  },
  "en": {
    "순서": "Rotation",
    "오늘은?": "Today",
    "내일은?": "Tomorrow",
    "제압": "Secure",
    "봉바": "Seize",
    "쇄빙": "Shatter",
    "온살": "Onsal",
    "順序": "Rotation",
    "今日": "Today",
    "明日": "Tomorrow",
    "制圧": "Secure",
    "シルロ": "Seize",
    "氷": "Shatter",
    "オンサル": "Onsal"
  },
  "ja": {
    "순서": "順序",
    "오늘은?": "今日",
    "내일은?": "明日",
    "제압": "制圧",
    "봉바": "シルロ",
    "쇄빙": "氷",
    "온살": "オンサル",
    "Rotation": "順序",
    "Today": "今日",
    "Tomorrow": "明日",
    "Secure": "制圧",
    "Seize": "シルロ",
    "Shatter": "氷",
    "Onsal": "オンサル"
  },
  "ko": {
    "Rotation": "순서",
    "Today": "오늘은?",
    "Tomorrow": "내일은?",
    "Secure": "제압",
    "Seize": "봉바",
    "Shatter": "쇄빙",
    "Onsal": "온살",
    "順序": "순서",
    "今日": "오늘은?",
    "明日": "내일은?",
    "制圧": "제압",
    "シルロ": "봉바",
    "氷": "쇄빙",
    "オンサル": "온살"
  }
}