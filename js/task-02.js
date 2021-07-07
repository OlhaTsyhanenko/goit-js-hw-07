const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
 
const ulEl = document.querySelector('ul#ingredients');
console.log(ulEl);

// const elements = ingredients.map((ingredient) => {
//     const itemEl = document.createElement('li');
//     itemEl.textContent = ingredient;
//     return itemEl;
// });

// console.log(elements);
// ulEl.append(...elements);


const addElements = (ingredients) => {
    return ingredients.map((ingredient) => {
        const itemEl = document.createElement('li');
        itemEl.textContent = ingredient;
        return itemEl;
    });
};

const elements = addElements(ingredients);
ulEl.append(...elements);