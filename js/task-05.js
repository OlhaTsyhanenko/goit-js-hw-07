const input = document.querySelector('input#name-input');
const output = document.querySelector('span#name-output');

input.addEventListener('input', onInputChange);

function onInputChange(event) {
    output.textContent = event.currentTarget.value;
    if (output.textContent === "") {
        output.textContent = 'незнакомец';
    }
    //console.log(event.currentTarget.value);
}