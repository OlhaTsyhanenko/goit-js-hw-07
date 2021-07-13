const input = document.querySelector('input#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    console.log(Number(event.currentTarget.value.length));
    if (event.currentTarget.value.length === Number(input.dataset.length)) {
        input.classList.add('valid');
    } else input.classList.add('invalid');
}