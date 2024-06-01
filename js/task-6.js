function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input');
const buttonEl = document.querySelectorAll('button');
const containerEl = document.querySelector('#boxes');

buttonEl[0].addEventListener('click', () => {
  if (inputEl.value > 0 && inputEl.value <= 100) {
    createBoxes(inputEl.value);
  }
})

function createBoxes(amount) {
  let i = 0;
  let x = 30;
  let y = 30;
  let markup = '';
  while (i < amount) {
    markup += `<div style=width:${x}px;height:${y}px;background-color:${getRandomHexColor()};></div>`;
    i++;
    x = x + 10;
    y = y + 10;
  }
  containerEl.innerHTML = markup;
}

buttonEl[1].addEventListener('click', () => {
  containerEl.innerHTML = '';
})