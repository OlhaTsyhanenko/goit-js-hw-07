const ulEl = document.querySelector('ul#categories');
const itemCategoryEl = ulEl.querySelectorAll('.item');
console.log(`В списке ${itemCategoryEl.length} категории.`);

function countElements(itemCategoryEl) {
    
    for (let i = 0; i < itemCategoryEl.length; i += 1){
       console.log(itemCategoryEl[i].querySelector('h2').textContent);
       console.log(`Количество элементов: ${itemCategoryEl[i].querySelectorAll('li').length}`);
    }
    
    }

console.log(countElements(itemCategoryEl));