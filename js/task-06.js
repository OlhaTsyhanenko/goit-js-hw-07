const input = document.querySelector('input#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    console.log(Number(event.currentTarget.value.length));
    if (event.currentTarget.value.length === Number(input.dataset.length)) {
        input.classList.add('valid');
    } if (event.currentTarget.value.length !== Number(input.dataset.length)) {
        input.classList.add('invalid');
    } if (event.currentTarget.value.length === 0) {
        input.classList.remove('valid');
        input.classList.remove('invalid');
    }  
}