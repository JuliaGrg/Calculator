const resultElement = document.getElementById('result');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const btnPlus = document.getElementById('button-plus');
const btnMinus = document.getElementById('button-minus');
const btnMultiply = document.getElementById('button-multiply');
const btnSubtraction = document.getElementById('button-subtraction');
const btnSubmit = document.getElementById('submit');
let action = '+';
// const sum = Number(num1.value) + Number(num2.value);
// const min = Number(num1.value) - Number(num2.value);
// const mul = Number(num1.value) * Number(num2.value);
// const sub = Number(num1.value) / Number(num2.value);

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
  if (action === '+') {
    const sum = Number(num1.value) + Number(num2.value);
    resultElement.textContent = sum;
  } 

  if (action === '-') {
    const min = Number(num1.value) - Number(num2.value);
    resultElement.textContent = min;
  } 

  if (action === '*') {
    const mul = Number(num1.value) * Number(num2.value);
    resultElement.textContent = mul;
  } 

  if (action === '/') {
    const sub = Number(num1.value) / Number(num2.value);

    resultElement.textContent = sub;
  } 
}
