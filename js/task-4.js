const form = document.querySelector('form.login-form');
form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const formdata = new FormData(form);
    const email = formdata.get('email');
    const password = formdata.get('password');

    const trimEmail = email.trim();
    const trimPassword = password.trim();



    if (trimEmail === '' || trimPassword === ''){
        alert('All form fields must be filled in');
        return;
    }

    const user = {
        email: trimEmail,
        password: trimPassword,

    };

    console.log(user);

    form.reset();

})
