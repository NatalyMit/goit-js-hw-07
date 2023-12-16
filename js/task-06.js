'use strict';
const form = document.querySelector('input');
const box = document.querySelector('#boxes');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
let elemDivSize = 30;

form.addEventListener('input', e => {
  e.preventDefault();
  const inputForm = e.target.value;
  console.log(inputForm);
});
btnCreate.addEventListener('click', e => {
  e.preventDefault();
  let randomColor = getRandomHexColor();
  box.style.width = `${elemDivSize}px`;
  box.style.height = `${elemDivSize}px`;
  box.style.backgroundColor = randomColor;
  console.log(boxDiv);
});
function createBoxes(amount) {
  if (amount == Number && 0 < amount < 100) {
  }
}
function destroyBoxes(params) {}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
