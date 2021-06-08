// обьявление кусочка функции
function fnName() {
  return 'result'
}


// функция, которая отобразит в консоли то, что ей передадут
function cl(argument) {
  console.log(argument)
}

// функция покажет в консоли ошибку
function consoleError(argument) {
  var title = 'This is error: '

  console.error(title + argument)
}

/* 

*/


// Использование let, const
// 2015 (es6 ECMA2015)
{
  let x = 10    // изменение возможно
  const y = 20  // изменение запрещено

  console.log(x) // => 10



  x = 50
  
  console.log(x) // => 50
  
  var z = 7
}

// console.log(x) // => x is not defined
// x === 50

console.log(z)
