const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');
inputEl.addEventListener('input', () => {
    const input = inputEl.value.trim();
    spanEl.textContent = input === '' ? 'Anonymous' : input;
})