'use strict';

const categoriesItems = document.querySelectorAll('.item');

console.log(`Numbers of categories: ${categoriesItems.length}`);

categoriesItems.forEach(function callback(el) {
  console.log(`Categories: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.childElementCount}`);
});
