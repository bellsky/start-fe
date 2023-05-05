const countElem = document.querySelector('.count');
const plusBtn = document.querySelector('#plusBtn');
const minusBtn = document.querySelector('#minusBtn');
let count = 0;

plusBtn.addEventListener('click', () => {
  count += 1;
  countElem.textContent = count;
});

minusBtn.addEventListener('click', () => {
  count -= 1;
  countElem.textContent = count;
});