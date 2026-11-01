const inputName = document.querySelector('#name-input');
const spanName = document.querySelector('#name-output');
inputName.addEventListener('input', (event) => {
    const trimValue = event.target.value.trim();
    if (trimValue != '') {
        spanName.textContent = trimValue;
    }
    else{
        spanName.textContent = 'Anonymous';
    }
})