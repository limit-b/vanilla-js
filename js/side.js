const side = document.querySelector('.js-side'),
  sideBtn = side.querySelector('.js-side__button');

const MOVE_SHOWING_CLASS = 'move-showing',
  MOVE_HIDDEN_CLASS = 'move-hidden';

let sideState = false;

function moveSide() {
  if (sideState) {
    sideState = false;
    side.classList.remove(MOVE_SHOWING_CLASS);
    side.classList.add(MOVE_HIDDEN_CLASS);
    sideBtn.textContent = 'open';
  } else {
    sideState = true;
    side.classList.remove(MOVE_HIDDEN_CLASS);
    side.classList.add(MOVE_SHOWING_CLASS);
    sideBtn.textContent = 'close';
  }
}

function init() {
  sideBtn.addEventListener('click', moveSide);
}

init();
