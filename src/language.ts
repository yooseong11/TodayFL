
import { elementID, locales } from './data'

const replceText = (el: Element, langType : { [key: string]: string; }) => {
  const key = el.textContent;
  el.textContent = langType[key] || key;
};

const init = () => {
	const elements = document.querySelectorAll('[data-i18n]');

	const langUI = document.getElementById(elementID.langMenu);

	langUI.addEventListener('change', (e) => {
		const target = e.currentTarget as HTMLInputElement;
		const currentValue = target.value

		const langType = locales[currentValue];
		elements.forEach((el) => replceText(el, langType));
	})

}
init();