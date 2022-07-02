const input = document.querySelector('input');
const paragr = document.querySelector('p');

input.addEventListener('change', () => {
  setTimeout(() => {
    paragr.textContent = input.value;
  }, 300);
});
