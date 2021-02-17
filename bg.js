const body = document.querySelector('body');

const IMG_NUMBER = 3,
  BG_IMAGE_CLASS = 'bg-image';

// function handleImgLoad() {
//   console.log('finish');
// }

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER + 1);
  return number;
}

function paintImage(imgNumber) {
  const bgImage = new Image();
  bgImage.src = `images/${imgNumber}.jpg`;
  bgImage.classList.add(BG_IMAGE_CLASS);
  body.prepend(bgImage);
  //   bgImage.addEventListener('loadend', handleImgLoad);
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
