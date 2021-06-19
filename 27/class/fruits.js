
// - Создать массив фруктов и отсортировать его по алфавиту. 
// Написать следующие функции.

const fruitList = ['apple', 'pineapple', 'orange', 'banana', 'watermelon'];


// - Вывод на экран с помощью document.write() 
// в виде списка (с помощью тегов ul и li). 

/**
 * [1,2,3] =>
 * 
 *  <ul>
 *    <li>1</li>
 *    <li>2</li>
 *    <li>3</li>
 *  </ul>
 */
function documentWrite(arr) {
  
  document.write('<ul>');

  for (let i = 0; i < arr.length; i++) {
    document.write(`<li>${arr[i]}</li>`);
  }

  document.write('</ul>');
}


documentWrite(fruitList);


// - Поиск фрукта в массиве. 
// Функция принимает название фрукта 
// и возвращает индекс найденного элемента или -1, 
// если не найден. Поиск не должен быть регистрозависимым.


function findFruit(arr, name) {
  const upperName = name.toUpperCase();
  
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i].toUpperCase() === upperName) {
  //     return i;
  //   }
  // }
  // return -1;

  return arr.findIndex((fruit) => fruit.toUpperCase() === upperName);
}

// const input = prompt('Введите название фрукта');

// alert(
//   findFruit(fruitList, input)
// )
