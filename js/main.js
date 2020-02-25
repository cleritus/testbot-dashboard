// SECTION 1 - input-option

const inputNumber = document.getElementById('input-number');
const inputArrow = [...document.querySelectorAll('.input-arrow')];
const inputArrowUp = [...document.querySelectorAll('.input-option__arrow--up')];
const inputArrowDown = [...document.querySelectorAll('.input-option__arrow--down')];

const reviewAvg = [...document.querySelectorAll('.review-avg')];
const thumbsUp = [...document.querySelectorAll('.thumb-up')];
const upCounter = [...document.querySelectorAll('.up-counter')];
const thumbsDown = [...document.querySelectorAll('.thumb-down')];
const downCounter = [...document.querySelectorAll('.down-counter')];

let number = 0;

function handleArrowUp() {

  // Increase number in input
  if (this.dataset.arrow === inputNumber.id && number < 6) {
    number++;
  } else return;

  inputNumber.textContent = number;

  number === 6 ? inputNumber.textContent = 'All 5' : console.log(true);
};

function handleArrowDown() {

  // Decrease number in input
  if (this.dataset.arrow === inputNumber.id && number > 0) {
    number--;
  } else return;

  inputNumber.textContent = number;
};


inputArrowUp.forEach(arrow => arrow.addEventListener('click', handleArrowUp));

inputArrowDown.forEach(arrow => arrow.addEventListener('click', handleArrowDown));

// Handle arrow background color on click

inputArrow.forEach(arrow => arrow.addEventListener('mousedown', function () {
  this.style.backgroundColor = '#e6ebf1';

}));

inputArrow.forEach(arrow => arrow.addEventListener('mouseup', function () {
  this.style.backgroundColor = '#fff';

}));

// Thumbs up/down handler


thumbsUp.forEach(item => item.addEventListener('click', function () {

  // Thumb-up addition
  upCounter.forEach(item => {

    if (this.id === item.dataset.thumb) {
      item.textContent++;
    }

  });

  // Avaragre 
  reviewAvg.forEach(item => {

    if (this.id === item.dataset.thumb)
      item.textContent++

  })
}))