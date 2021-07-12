const input = document.querySelector('input#validation-input');
// const inputValid = 'validation-input.valid';
// const inputInvalid = 'validation-input.invalid';
console.log(input.id);



input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    console.log(Number(event.currentTarget.value.length));
    const correctLength = Number(input.dataset.length);
    let inputLength = event.currentTarget.value.length;
    if (inputLength === correctLength) {
        input.classList.add('valid');
       // this.style.borderColor = 'green';

        //console.log(input.id);
    } if (correctLength !== inputLength) {
        input.classList.add('invalid');
       // this.style.borderColor = 'red';
    }

        //input.id = 'validation-input.invalid';
        //console.log(input.id);
    
    
}