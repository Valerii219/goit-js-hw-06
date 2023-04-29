const buttonEl = document.querySelector('.change-color')
const spanColor = document.querySelector('.color')
const bodyEl = document.querySelector('body')
buttonEl.addEventListener('click', () => {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  spanColor.textContent = ` - ${color}`;
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

