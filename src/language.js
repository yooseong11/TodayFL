
import { elementID, languages } from './data.js';

const replceText = (el, langType = KoreanConfig) => {
  const key = el.textContent;
  el.textContent = langType[key] || key;
};

const init = () => {
	const elements = document.querySelectorAll('[data-i18n]');

	const langUI = document.getElementById(elementID.langMenu);
	langUI.addEventListener('change', (e) => {
		const currentValue = e.currentTarget.value
		const langType = languages[currentValue];
		elements.forEach((el) => replceText(el, langType));
	})

}
init();