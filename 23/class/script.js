function validateNumber(input) {
  // Отсутствие правильного значения
  if (input !== null) {
    
    // NaN - тип данных "не число" 
    // Те значения, что нельзя привести к числу
    if (isNaN(input) || input === '') {
      
      alert('Вы ввели не число!!!')
    } else {
      // бинарный тип данных (Boolean)
      return true
    }
  } else {
    alert('Нужно было нажать OK');
  }

  return false
}

function checkUserNumber() {
  const x = prompt('Введите число:');

  // в этой функции нам больше делать нечего
  if (!validateNumber(x)) return

  checkNumber(x);
}

function checkNumber(numeric) {

  if (numeric < 0) {
    alert(`Введенное число ${numeric} является отрицательным`);
  } else if (numeric > 0) {
    alert(`Введенное число ${numeric} является положительным`);
  } else {
    alert(`Введенное число это ноль`);
  }
}


function checkNumberModule() {
  const x = prompt('Введите число:');

  if (validateNumber(x)) {
    alert(Math.abs(x));
  }
}
