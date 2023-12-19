'use strict';

const nameInput = document.querySelector('#name-input');

const nameOutputSpan = document.querySelector('#name-output');

nameInput.addEventListener('input', e => {
  const nameForm = e.target.value.trim();
  if (nameForm !== '') {
    nameOutputSpan.textContent = nameForm;
  } else {
    nameOutputSpan.textContent = 'Anonymous';
  }
});
