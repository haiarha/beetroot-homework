// - Создать массив из 10 случайных чисел 
// и написать несколько функций для работы с ним. 

// Метод Math.random()

// заполнить с помощью цикла for



function createRandomNumbers(length) {
  const arr = [];
  
  for (let i = 0; i < length; i++) {
    // arr[i] = Math.floor(Math.random() * 10) + 1;
  
    arr.push(Math.floor(Math.random() * 10) + 1);
  }

  return arr;
}

const randomNumbers = createRandomNumbers(10)


function sortArray(arr) {
  const arrCopy = [...arr];

  arrCopy.sort((a, b) => a - b);
  // arrCopy.sort(function(a, b) {
  //   return a - b;
  // });

  return arrCopy;
}

console.log(1, randomNumbers);

const sortedArray = sortArray(randomNumbers);

console.log(2, sortedArray);


// - Функция принимает массив и выводит его на экран. 
function printArray(arr) {
  alert(arr.join(':  :'));
}

// printArray(sortedArray)

// - Функция принимает массив и выводит только четные элементы. 
function findEven(arr) {
  // const evenArray = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if ((arr[i] % 2) === 0) {
  //     evenArray.push(arr[i]);
  //   }
  // }
  // return evenArray;

  return arr.filter((element) => (element % 2) === 0)
}



// - Функция принимает массив и возвращает сумму всех элементов массива.
function getSum(arr) {
  // let sum = 0;

  // for (let i = 0; i < arr.length; i++) {
  //   // sum = arr[i] + sum;
  //   sum += arr[i];
  // }

  // return sum;

  return arr.reduce((sum, element) => sum + element, 0)
}


// - Функция принимает массив и возвращает его максимальный элемент. 
// sortedArray[sortedArray.length - 1]
function maxNumber(arr) {
  // let max = -Infinity;

  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] > max) {
  //     max = arr[i];
  //   }
  // }

  // return max;

  return Math.max(...arr);
}


// - Функция добавления нового элемента в массив по указанному индексу.
function addElement(arr, element, index) {
  const arrCopy = [...arr];

  arrCopy.splice(index, 0, element);

  return arrCopy;
}


// - Функция удаления элемента из массива по указанному индексу. 
function deleteElement(arr, index) {
  const arrCopy = [...arr];

  arrCopy.splice(index, 1);

  return arrCopy;
} 

// alert(
//   deleteElement(sortedArray, 6)
// )

console.warn('Создан новый массив')
// - Создать еще один массив из 5 случайных чисел и написать следующие функции:



const moreRandomNumbers = createRandomNumbers(5);

console.log(moreRandomNumbers);

// - Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из двух массивов без повторений;
function cleanMerge(arr1, arr2) {
  const arrResult = [];

  // const merged = arr1.concat(arr2);
  const merged = [...arr1, ...arr2];

  for (let i = 0; i < merged.length; i++) {
    if (!arrResult.includes(merged[i])) { // если элемента еще нет в массиве
      arrResult.push(merged[i]); // тогда пушим
    }
  }

  return arrResult;
}


// - Функция принимает 2 массива и возвращает новый массив, 
// в котором собраны общие элементы 
// (то есть элементы, которые встречаются и в первом, и во втором массивах) 
// без повторений;
function cleanInsertion(arr1, arr2) {
  const arrResult = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arrResult.includes(arr1[i])) { // исключаем повторения
      continue; // переход на следующую итерацию цикла
    }

    if (arr2.includes(arr1[i])) { // проверяем наличие во втором массиве
      arrResult.push(arr1[i]);
    }

    // for (let j = 0; j < arr2.length; j++) {
    //   if (arrResult.includes(arr2[j])) {
    //     continue; // переход на следующую итерацию цикла
    //   }

    //   if (arr1[i] === arr2[j]) {
    //     arrResult.push(arr1[i]);
    //   }
    // }
  }

  return arrResult;
}

// alert(
//   cleanInsertion(randomNumbers, moreRandomNumbers)
// )



// - Функция принимает 2 массива и возвращает новый массив, 
// в котором собраны все элементы из первого массива, которых нет во втором массиве.
function subtract(arr1, arr2) {
  const arrResult = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      arrResult.push(arr1[i]);
    }
  }

  return arrResult;
}

// alert(
//   subtract(randomNumbers, moreRandomNumbers)
// )
