const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
event.preventDefault();
const formCurrent = event.currentTarget.elements;
const email = formCurrent.email.value;
const password = formCurrent.password.value;

if(email === "" || password === ""){
    alert('всі поля повинні бути заповнені');}

const formData = new FormData(event.currentTarget)
formData.forEach((email, password) => {
console.log('name:', password),
console.log('value:', email)
})

form.reset(formData)
}

