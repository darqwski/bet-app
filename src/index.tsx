import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import i18n from 'i18next';
import pl from './translations/pl';
import {  initReactI18next } from 'react-i18next';

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources: {
			pl: {
				translation: {
					...pl
				}
			}
		},
		lng: 'pl', // if you're using a language detector, do not define the lng option
		fallbackLng: 'pl',

		interpolation: {
			escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
		}
	});

ReactDOM.render(<App />, document.getElementById('react-app'));
