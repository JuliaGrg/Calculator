const resultElement = document.getElementById('result');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const btnPlus = document.getElementById('button-plus');
const btnMinus = document.getElementById('button-minus');
const btnMultiply = document.getElementById('button-multiply');
const btnSubtraction = document.getElementById('button-subtraction');
const btnSubmit = document.getElementById('submit');
let action = '+';


btnPlus.onclick = function() {
  action = '+';
}

btnMinus.onclick = function() {
 action = '-';
}

btnMultiply.onclick = function() {
  action = '*';
}

btnSubtraction.onclick = function() {
 action = '/';
}

btnSubmit.onclick = function () {
  const sum = Number(num1.value) + Number(num2.value);
  const min = Number(num1.value) - Number(num2.value);
  const mul = Number(num1.value) * Number(num2.value);
  const sub = Number(num1.value) / Number(num2.value);

  if (action === '+') {
    resultElement.textContent = sum;
  } else if (action === '-') {
    resultElement.textContent = min;
  } else if (action === '*') {
    resultElement.textContent = mul;
  } else if (action === '/') {
    resultElement.textContent = sub;
  } 
}
