const ulEl = document.querySelector('ul#categories');
//console.log(ulEl);

const itemCategoryEl = ulEl.querySelectorAll('.item');
console.log(`В списке ${itemCategoryEl.length} категории.`);

const countFirstCategoryEl = itemCategoryEl[0].querySelectorAll('li');
//console.log(itemCategoryEl[0]);
const titleFirstCategoryEl = itemCategoryEl[0].querySelector('h2');
console.log(titleFirstCategoryEl.textContent);
console.log(`Количество элементов: ${countFirstCategoryEl.length}`);

const countSecondCategoryEl = itemCategoryEl[1].querySelectorAll('li');
//console.log(itemCategoryEl[1]);
const titleSecondCategoryEl = itemCategoryEl[1].querySelector('h2');
console.log(titleSecondCategoryEl.textContent);
console.log(`Количество элементов: ${countSecondCategoryEl.length}`);

const countThirdCategoryEl = itemCategoryEl[2].querySelectorAll('li');
const titleThirdCategoryEl = itemCategoryEl[2].querySelector('h2');
console.log(titleThirdCategoryEl.textContent);
//console.log(itemCategoryEl[2]);
console.log(`Количество элементов: ${countThirdCategoryEl.length}`);