'use strict';

const clickButton = document.querySelector('.change-color');
const colorBox = document.querySelector('body');
const colorSpan = document.querySelector('.color');
const box = document.querySelector('.widget');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
clickButton.addEventListener('click', e => {
  let randomColor = getRandomHexColor();
  colorBox.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});
