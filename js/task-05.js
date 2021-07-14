const input = document.querySelector('input#name-input');
const output = document.querySelector('span#name-output');

input.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value.trim()) {
        output.textContent = event.currentTarget.value;
    } else output.textContent = 'незнакомец';
    
}