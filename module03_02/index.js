const input = document.querySelector('input');
const paragr = document.querySelector('p');

function debounce() {
  paragr.textContent = input.value;
};

input.addEventListener('change', () => {
  let timerId = setTimeout(debounce, 300);
});
