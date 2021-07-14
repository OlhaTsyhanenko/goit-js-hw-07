const ulEl = document.querySelector('ul#categories');
const itemCategoryEl = ulEl.querySelectorAll('.item');
console.log(`В списке ${itemCategoryEl.length} категории.`);

const result = document.querySelectorAll(".item").forEach(item => {
    console.log(`Категория: ${item.querySelector('h2').textContent}`);
    console.log(`Количество элементов: ${item.querySelectorAll('li').length}`);
})