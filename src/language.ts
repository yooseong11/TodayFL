
import { elementID, locales } from './data'

const replceText = (el: Element, langType : { [key: string]: string; }) => {
  const key = el.textContent;
  el.textContent = langType[key] || key;
};

const getLanguage = function() {
  return navigator.language
}

const getLangType = function (langCode: string) {
	return locales[langCode]
}

const init = () => {
	const elements = document.querySelectorAll('[data-i18n]');
	const langUI = document.getElementById(elementID.langMenu) as HTMLInputElement;

	const setBrowserLang = function() {
		const browserLanguage = getLanguage();
		langUI.value = browserLanguage;
		
		elements.forEach((el) => replceText(el, getLangType(browserLanguage)));
	};
	setBrowserLang();

	const onChangeEvnet = function () {

		langUI.addEventListener('change', (e) => {
			const target = e.currentTarget as HTMLInputElement;
			const currentValue = target.value
	
			const langType = getLangType(currentValue);
			elements.forEach((el) => replceText(el, langType));
		})
	}
	onChangeEvnet();
}
init();