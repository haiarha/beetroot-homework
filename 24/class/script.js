// Вывести все числа от 1 до 100,
// которые кратные указанному пользователем числу.
function calculateMultiples() {
  const input = prompt("Введите число");

  for (let i = 1; i <= 100; i++) {
    if (i % input !== 0) {
      continue;
    }

    console.log(i);
  }
}

// Вывести каждый 4-й элемент из указанного пользователем диапазона.
// Пользователь указывает минимальное и максимальное значения диапазона.
function quadrupleNumber() {
  const input1 = +prompt("Введите первое число");
  const input2 = +prompt("Введите второе число");

  let result = "";

  for (let i = input1 + 3; i <= input2; i += 4) {
    result += ` ${i}`;
  }
  console.log(result);
}

// Запросить число и проверить, простое ли оно.
// Простое число делится без остатка только на себя и на единицу.
function isNumberPrime() {
  const input = prompt("Введите число");

  for (let i = 2; i < input; i++) {
    if (input % i === 0) {
      console.log("Число не простое");
      return;
    }
  }
  console.log("Число простое");
}

// Вывести # столько раз, сколько указал пользователь.
function showHashtag() {
  let input = +prompt("Введите число");

  input = Math.abs(input);

  console.log("Вот:");

  // Boolean('')           // false
  // Boolean(0)            // false
  // Boolean(-0)           // false
  // Boolean(NaN)          // false
  // Boolean(null)         // false
  // Boolean(undefined)    // false
  // Boolean(false)        // false
  while (input--) {
    console.log("#");
  }
}

// Запросить число и степень.
// Возвести число в указанную степень и вывести результат.
function numberPow() {
  const input1 = +prompt("Введите число");
  // Результат вызова функции `prompt` передается аргументом
  // в функцию `parseInt`
  const pow = parseInt(prompt("Введите степень числа"));

  let absPow = Math.abs(pow);
  let result = 1;

  while (absPow--) {
    result *= input1;
  }
  if (pow < 0) {
    result = 1 / result;
  }

  console.log(result);
}

// Запросить 2 числа и найти все общие делители.
function commonMultiples() {
  const input1 = +prompt("Введите первое число");
  const input2 = +prompt("Введите второе число");

  // const minNumber = Math.abs((input1 < input2) ? input1 : input2);
  // for (let i = 2; i <= minNumber; i++) {
  //   if (input1 % i === 0 && input2 % i === 0) {
  //     console.log(i)
  //   }
  // }

  let minNumber = Math.abs((input1 < input2) ? input1 : input2);

  while (minNumber > 1) {
    if (((input1 % minNumber) === 0) && ((input2 % minNumber) === 0)) {
      console.log(minNumber);
    }
    minNumber--;
  }
}

// Предлагать пользователю решить пример
// 2 + 2 * 2 до тех пор, пока он не решит его правильно.
function dummyTest() {
  let answer;

  do {
    answer = +prompt("Сколько будет 2 + 2 * 2?");
  } while (answer !== 2 + 2 * 2);
}

// Делить число 1000 на 2 до тех пор, пока не получится число меньше 50.
// Вывести это число и сколько делений произвели.
function divisionThousand() {
  let currentNumber = 1000;

  let counter = 0;

  do {
    currentNumber /= 2;
    counter++;
  } while (currentNumber > 50);

  console.log(currentNumber, counter);
}

