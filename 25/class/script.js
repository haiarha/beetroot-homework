"use strict"



// const num1 = 1,
//       num2 = 2;
// то же, что и:
// const num1 = 1;
// const num2 = 2;


// minNumber(2, 3); // определенную функцию можно вызвать до создания (определения)

// Написать функцию, которая принимает 2 числа 
// и возвращает меньшее из них.
function minNumber(num1, num2) { // определение функции (function declaration)
  
  // если первое число меньше второго - вернуть первое число
  // иначе вернуть второе число

  if (num1 < num2) {
    return num1;
  } else {
    return num2;
  }
}

// declFnMinNumber(2, 3); // функциональное выражение нельзя вызвать до создания

const declFnMinNumber = function(num1, num2) { // функциональное выражение (function expression)
  if (num1 < num2) {
    return num1;
  } else {
    return num2;
  }
};

// Стрелочная функция
// const arrowDeclFnMinNumber = (num1, num2) => {
//   return num1 < num2
//     ? num1
//     : num2;
// };
const arrowDeclFnMinNumber = (num1, num2) => num1 < num2
  ? num1
  : num2;


function sum(a, b) {
  return a + b;
}

const sum = (a, b) => a + b;



// Написать функцию, которая возводит
// переданное число в указанную степень.

// (не используя оператор возведения в степень или Math.pow())

function powNumber(num, pow) {
  // Если степень равна 0 то вернуть 1
  
  // Умножить переданное число само на себя столько раз, 
  // сколько передано как степень

  let result = 1;

  for (let i = 1; i <= pow; i++) {
    result *= num;
  }

  return result;
}

// альтернативное решение с помощью рекурсивной 
function recursionPowNumber(num, pow) {
  if (pow === 0) return 1;

  return num * recursionPowNumber(num, pow - 1);
}


// Написать функцию, которая реализует работу оператора %.
// Функция принимает 2 параметра и возвращает остаток от деления 
// первого параметра на второй.

// В функции использовать только + - * /, оператор % не использовать.


// есть два числа:
function divisionRest(num1, num2) {
  let tmp

  // 1. находим результат целочисленного деления первого числа на второе.
  // tmp = Math.floor(num1 / num2); // или так
  tmp = parseInt(num1 / num2, 10); // или так

  // 2. Умножаем результат деления на делитель (второе число).
  tmp = tmp * num2;

  // 3. от первого числа отнять результат умножения.
  tmp = num1 - tmp;

  return tmp;
}