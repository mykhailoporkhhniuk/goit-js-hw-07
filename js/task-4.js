const formEl = document.querySelector('.login-form');
const emailInput = document.querySelector('input[name="email"]').value.trim();
const passwordInput = document.querySelector('input[name="password"]').value.trim();
formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    if (emailInput === '' || passwordInput === '') {
        alert('All form fields must be filled in');
    }
    const formData = new FormData(formEl);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    console.log(data);
    formEl.reset();
})

