const btnsEl = document.querySelectorAll('button');
const value = document.querySelector('#value');
let counterValue;

function increment() {
    let currentValue = Number(value.textContent);
    if (btnsEl[1].dataset.action === 'increment') {
        counterValue = currentValue + 1;
        }
    
    return value.textContent = counterValue;
}

function decrement() {
    let currentValue = Number(value.textContent);
    if (btnsEl[0].dataset.action === 'decrement') {
        counterValue = currentValue -1;
        }
    return value.textContent = counterValue;
}

btnsEl[1].addEventListener('click', increment);
btnsEl[0].addEventListener('click', decrement);
