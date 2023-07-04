import checkLuhn from './CheckLuhn.js';
import checkPayment from './CheckPayment.js';

const validateForm = document.querySelector('.validate-form');
const formInput = document.querySelector('.widget-input');
const resultOutput = document.querySelector('.validate-result');

function resetForm() {
  const checkedPayment = document.querySelector('.checked');
  if (checkedPayment) {
    checkedPayment.classList.remove('checked');
  }
}

validateForm.addEventListener('submit', (e) => {
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