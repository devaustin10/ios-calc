const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result span');

let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', (event) => {
    let numberValue = event.target.getAttribute('data-value'); // Use data-value
    if (isFirstValue === false) {
      getFirstValue(numberValue);
    }
  });
}

function getFirstValue(numberValue) {
  result.innerHTML = "";
  firstValue += numberValue;
  result.innerHTML = firstValue;
  firstValue = +firstValue;
}
