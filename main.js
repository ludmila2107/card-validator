/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/CheckLuhn.js
function checkLuhn(setValue) {
  let ch = 0;
  const num = String(setValue).replace(/\D/g, '');
  const isOdd = num.length % 2 !== 0;
  if (num === '') {
    return false;
  }
  for (let i = 0; i < num.length; i += 1) {
    let n = parseInt(num[i], 10);
    /* eslint no-cond-assign: 2 */
    ch += (isOdd || 0) === i % 2 && (n *= 2) > 9 ? n - 9 : n;
  }
  return ch % 10 === 0;
}
;// CONCATENATED MODULE: ./src/js/CheckPayment.js
function checkPayment(card) {
  const mir = new RegExp('^220(0|4)[0-9]{12}[0-9]*$');
  const visa = new RegExp('^4[0-9]{12}(?:[0-9]{3})?$');
  const mastercard = new RegExp('^5[1-5][0-9]{14}$');
  const mastercard2 = new RegExp('^2[2-7][0-9]{14}$');
  const amex = new RegExp('^3[47][0-9]{13}$');
  const diners = new RegExp('^3[0689][0-9]{12}[0-9]*$');
  const jcb = new RegExp('^35[0-9]{14}[0-9]*$');
  if (mir.test(card)) {
    return 'mir';
  }
  if (visa.test(card)) {
    return 'visa';
  }
  if (mastercard.test(card) || mastercard2.test(card)) {
    return 'mastercard';
  }
  if (amex.test(card)) {
    return 'amex';
  }
  if (diners.test(card)) {
    return 'diners';
  }
  if (jcb.test(card)) {
    return 'jcb';
  }
  return undefined;
}
;// CONCATENATED MODULE: ./src/js/app.js


const validateForm = document.querySelector('.validate-form');
const formInput = document.querySelector('.widget-input');
const resultOutput = document.querySelector('.validate-result');
function resetForm() {
  const checkedPayment = document.querySelector('.checked');
  if (checkedPayment) {
    checkedPayment.classList.remove('checked');
  }
}
validateForm.addEventListener('submit', e => {
  e.preventDefault();
  resetForm();
  const inputedText = formInput.value.replace(/\s/g, '');
  if (checkLuhn(inputedText)) {
    resultOutput.textContent = 'This card is valid';
    resultOutput.style.color = 'green';
    const currentPayment = document.querySelector(`.${checkPayment(inputedText)}`);
    currentPayment.classList.add('checked');
  } else {
    resultOutput.textContent = 'This card is not valid';
    resultOutput.style.color = 'red';
  }
});
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;