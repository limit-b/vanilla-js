const greetingForm = document.querySelector('.js-form'),
  greetingInput = document.querySelector('.js-form__input'),
  greetingText = document.querySelector('.js-greetings');

const USER_LS = 'currentUser',
  SHOWING_CN = 'showing';

function paintGreeting(text) {
  greetingForm.classList.remove(SHOWING_CN);
  greetingText.classList.add(SHOWING_CN);
  greetingText.textContent = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
