// // const btnsEl = document.querySelectorAll('button');

// // btnsEl.forEach(btn => {
// //     btn.addEventListener('click', function () {
// //         const action = this.dataset.action;
// //         const inp = this.parentElement.querySelector('#value');
// //         const currentValue = +inp.textContent;
// //         console.log(action);
// //         console.log(inp);
// //         console.log(currentValue);
// //         let newValue;

// //         if (action === 'increment') {
// //             newValue = currentValue + 1;
// //         } else {
// //             newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;            
// //         }

// //         inp.textContent = newValue;
// //     })
// // })


// const btnsEl = document.querySelectorAll('button');
// const btn = document.querySelector('button');
// const value = document.querySelector('#value');
// const currentValue = Number(value.textContent);
// let counterValue = 0;
// //let actionValue = btnsEl[0].dataset.action;
// //console.log(actionValue);
// //console.log(btnsEl);
// //console.log(btn);
// const incrementValue = btnsEl[1];
// const decrementValue = btnsEl[0]

// const increment = () => {
//     if (btnsEl[1].dataset.action === 'increment') {
//         counterValue = currentValue + 1;
//         console.log(counterValue);
//         }
//     return value.textContent = counterValue;
// }

// const decrement = () => {
//     if (btnsEl[0].dataset.action === 'decrement') {
//         counterValue = currentValue - 1;
//         }
//       return value.textContent = counterValue;
// }

// // incrementValue.addEventListener('click', increment);
// // incrementValue.addEventListener('click', increment);
// // incrementValue.addEventListener('click', increment);
// // decrementValue.addEventListener('click', decrement);

// btnsEl.forEach(btn => {
//     btn.addEventListener('click', increment), btn.addEventListener('click', decrement);
// })




const btnsEl = document.querySelectorAll('button');
btnsEl.forEach(btn => {
    btn.addEventListener('click', function () {
        const action = this.dataset.action;
        const value = document.querySelector('#value');
        const currentValue = Number(value.textContent);
        console.log(action);
        console.log(currentValue);
        let counterValue;

        if (action === 'increment') {
            counterValue = currentValue + 1;
        } else {
            counterValue = currentValue - 1 > 0 ? currentValue - 1 : 0;            
        }

        value.textContent = counterValue;
    })
})