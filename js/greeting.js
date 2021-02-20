const greetingForm = document.querySelector('.js-greeting-form'),
  greetingInput = greetingForm.querySelector('.js-greeting-form__input'),
  greetingText = document.querySelector('.js-greeting-text');

const USER_LS = 'currentUser',
  SHOWING_CLASS = 'showing';

function getSay() {
  const greetingHours = getClockTime().hours;
  let greetingSay;
  if (greetingHours >= 6 && greetingHours < 12) {
    greetingSay = 'Good morning';
  } else if (greetingHours === 12) {
    greetingSay = 'Enjoy your lunch';
  } else if (greetingHours > 12 && greetingHours < 17) {
    greetingSay = 'Good afternoon';
  } else if (greetingHours >= 17 && greetingHours < 21) {
    greetingSay = 'Good evening';
  } else {
    greetingSay = 'Hello';
  }
  return greetingSay;
}

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function paintGreeting(text) {
  const paintingSay = getSay();
  greetingForm.classList.remove(SHOWING_CLASS);
  greetingText.classList.add(SHOWING_CLASS);
  greetingText.textContent = `${paintingSay}, ${text}`;
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
