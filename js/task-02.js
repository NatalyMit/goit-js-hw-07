'use strict';
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url: 'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url: 'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url: 'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];
const navListGalery = document.querySelector('.gallery');
console.dir(navListGalery);
const itemList = document.createElement('li');
navListGalery.append(itemList);
const imageFirstEl = document.createElement('img');
imageFirstEl.src = images[0].url;
imageFirstEl.alt = images[0].alt;
console.log(imageFirstEl);
itemList.append(imageFirstEl);
console.log(itemList);
const imageSecondEl = document.createElement('img');
imageSecondEl.src = images[1].url;
imageSecondEl.alt = images[1].alt;
console.log(imageSecondEl);
const imageThirdEl = document.createElement('img');
imageThirdEl.src = images[2].url;
imageThirdEl.alt = images[2].alt;
console.log(imageThirdEl);
const imageFourthEl = document.createElement('img');
imageFourthEl.src = images[3].url;
imageFourthEl.alt = images[3].alt;
console.log(imageFourthEl);
const imageFifthEl = document.createElement('img');
imageFifthEl.src = images[4].url;
imageFifthEl.alt = images[4].alt;
console.log(imageFifthEl);
const imageSixthEl = document.createElement('img');
imageSixthEl.src = images[5].url;
imageSixthEl.alt = images[5].alt;
console.log(imageSixthEl);
