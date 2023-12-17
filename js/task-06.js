const form = document.querySelector('input');
const boxes = document.querySelector('#boxes');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');

btnCreate.addEventListener('click', e => {
  let amount;
  if (form.value > 0 && form.value < 100) {
    amount = form.value;
  } else {
    alert`Please, write the correct condition: '1-100' :blush:`;
    return;
  }
  createBoxes(amount);
});
btnDestroy.addEventListener('click', е => {
  deleteBox();
  form.value = '';
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  deleteBox();
  let boxSize = 30;
  for (let i = 0; i < amount; i += 1) {
    let box = document.createElement('div');
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    boxSize += 10;
    box.style.backgroundColor = getRandomHexColor();
    boxes.append(box);
  }
}

function deleteBox() {
  boxes.innerHTML = ``;
}
