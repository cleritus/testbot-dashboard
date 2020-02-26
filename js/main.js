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


class Box {
  constructor(idUp, idDown) {
    this.idUp = idUp;
    this.idDown = idDown;
    this.upValue = 0;
    this.downValue = 0;
    this.avg = 0;
  }
}

const box1 = new Box("1-up", "1-down");

const box2 = new Box("2-up", "2-down");

const box3 = new Box("3-up", "3-down");

function math(item) {
  return Math.floor(item * 100)
}

function avg(box) {
  box.avg = box.upValue / (box.upValue + box.downValue);
}


// THUMBS UP FUNCTION

function thumbUp() {

  upCounter.forEach(item => {

    if (this.id === item.dataset.thumbup) {

      if (this.id === box1.idUp) {
        box1.upValue++;
        item.textContent = box1.upValue;
        avg(box1);
      }

      if (this.id === box2.idUp) {
        box2.upValue++;
        item.textContent = box2.upValue;
        avg(box2)
      }

      if (this.id === box3.idUp) {
        box3.upValue++;
        item.textContent = box3.upValue;
        avg(box3);
      }
    }
  });

  // Avarage 
  reviewAvg.forEach(item => {

    if (this.id === item.dataset.thumbup) {
      if (this.id === box1.idUp) {

        item.textContent = math(box1.avg);
      }
      if (this.id === box2.idUp) {

        item.textContent = math(box2.avg);
      }
      if (this.id === box3.idUp) {

        item.textContent = math(box3.avg);
      }
    }
  })
};

// THUMBS DOWN FUNCTION

function thumbDown() {

  downCounter.forEach(item => {

    if (this.id === item.dataset.thumbdown) {

      if (this.id === box1.idDown) {
        box1.downValue++;
        item.textContent = box1.downValue;
        avg(box1);
      }

      if (this.id === box2.idDown) {
        box2.downValue++;
        item.textContent = box2.downValue;
        avg(box2);
      }

      if (this.id === box3.idDown) {
        box3.downValue++;
        item.textContent = box3.downValue;
        avg(box3);
      }
    }
  });

  reviewAvg.forEach(item => {

    if (this.id === item.dataset.thumbdown) {
      if (this.id === box1.idDown) {

        item.textContent = math(box1.avg);
      }
      if (this.id === box2.idDown) {

        item.textContent = math(box2.avg);
      }
      if (this.id === box3.idDown) {

        item.textContent = math(box3.avg);
      }
    }

  })
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

thumbsUp.forEach(item => item.addEventListener('click', thumbUp));

thumbsDown.forEach(item => item.addEventListener('click', thumbDown));