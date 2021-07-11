// const resultEl = document.querySelector('#value');
// const buttonsEl = document.querySelectorAll('button');


// console.log(resultEl);
// console.log(buttonsEl);
// console.log(buttonsEl[0].dataset.action);
// console.log(buttonsEl[1].dataset.action);


// // resultEl.addEventListener('click', onButtonclick);

// // function onButtonclick() {
// //     console.log('Click')
// // }

// let counterValue = 0;

// buttonsEl[1].addEventListener('click', () => {
//     resultEl.addEventListener('click', increment);
// });

// function increment() {
//    counterValue += 1;
// }

// buttonsEl[0].addEventListener('click', () => {
//     resultEl.addEventListener('click', decrement);
// });

// function decrement() {
//   counterValue -= 1;
// }

// console.log(counterValue);


const btnsEl = document.querySelectorAll('button');

btnsEl.forEach(btn => {
    btn.addEventListener('click', function () {
        const action = this.dataset.action;
        const inp = this.parentElement.querySelector('#value');
        const currentValue = +inp.textContent;
        console.log(action);
        console.log(inp);
        console.log(currentValue);
        let newValue;

        if (action === 'increment') {
            newValue = currentValue + 1;
        } else {
            newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;            
        }

        inp.textContent = newValue;
    })
})