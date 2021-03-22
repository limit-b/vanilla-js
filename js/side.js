const sideBtn = document.querySelector('.js-side__button');

const MOVE_SHOWING_CLASS = 'move-showing',
  MOVE_HIDDEN_CLASS = 'move-hidden';

let sideState = false;

function handleSideBtn(event) {
  const btn = event.target;
  moveSide(btn.parentElement);
}

function moveSide(element) {
  if (sideState) {
    sideState = false;
    element.classList.remove(MOVE_SHOWING_CLASS);
    element.classList.add(MOVE_HIDDEN_CLASS);
    sideBtn.textContent = 'open';
  } else {
    sideState = true;
    element.classList.remove(MOVE_HIDDEN_CLASS);
    element.classList.add(MOVE_SHOWING_CLASS);
    sideBtn.textContent = 'close';
  }
}

function init() {
  sideBtn.addEventListener('click', handleSideBtn);
}

init();
