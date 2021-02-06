const greetingForm = document.querySelector('.js-greeting-form'),
  greetingInput = document.querySelector('.js-greeting-form__input'),
  greetingText = document.querySelector('.js-greeting-text');

const USER_LS = 'currentUser',
  SHOWING_CLASS = 'showing';

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function paintGreeting(text) {
  greetingForm.classList.remove(SHOWING_CLASS);
  greetingText.classList.add(SHOWING_CLASS);
  greetingText.textContent = `Hello ${text}`;
}

function handleSubmitName(event) {
  event.preventDefault();
  const currentNameValue = greetingInput.value;
  saveName(currentNameValue);
  paintGreeting(currentNameValue);
}

function askForName() {
  greetingForm.classList.add(SHOWING_CLASS);
  greetingForm.addEventListener('submit', handleSubmitName);
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
