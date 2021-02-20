const clockContainer = document.querySelector('.js-clock'),
  clockText = clockContainer.querySelector('.js-clock__text');

function getClockTime() {
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const time = {
    seconds,
    minutes,
    hours,
  };
  return time;
}

function paintTime() {
  const paintDate = getClockTime();
  const paintSeconds = paintDate.seconds;
  const paintMinutes = paintDate.minutes;
  const paintHours = paintDate.hours;
  clockText.textContent = `${paintHours < 10 ? `0${paintHours}` : paintHours}:${
    paintMinutes < 10 ? `0${paintMinutes}` : paintMinutes
  }:${paintSeconds < 10 ? `0${paintSeconds}` : paintSeconds}`;
}

function init() {
  paintTime();
  setInterval(paintTime, 1000);
}

init();
