// Пример с животными

// Звери четвероногие
// - Кошка
// - собака

class Animal {
  /**
   *
   * @param {Number} _furLength  Длинна шерсти животного, в миллиметрах
   * @param {Number} _weight     Вес животного, в килограммах
   * @param {Boolean} _predator  Хищник ли
   * @param {Number} _age        Возраст в годах
   */
  constructor(_furLength, _weight, _predator, _age) {
    this.furLength = _furLength;
    this.weight = _weight;
    this.predator = _predator;
    this.age = _age;
  }

  running(steps) {
    for (let i = 1; i <= steps; i++) {
      console.log("Бигим " + i);
    }
  }
}

class Dog extends Animal {
  bark(times) {
    let accumulator = "";

    for (let i = 1; i < times; i++) {
      // if (accumulator) accumulator += '-'
      accumulator && (accumulator += "-");

      accumulator += "гав";
    }

    console.log(accumulator);
  }
}

const boxDog = new Dog(10, 10, true, 0.33);




// Задачки

// Реализовать класс PrintMaсhine, которой состоит из:
class PrintMachine {
  constructor(
    fontSize = 16,
    color = "black",
    fontFamily = "Arial, sans-serif"
  ) {
    // - размера шрифта;
    this.fontSize = fontSize;
    // - цвета шрифта;
    this.color = color;
    // - семейства шрифта;
    this.fontFamily = fontFamily;
  }

  print(text) {
    // - метода print(), который принимает текст и печатает его соответствующим шрифтом с помощью document.write().
    document.write(`<p style="
      font-size: ${this.fontSize}px;
      color: ${this.color};
      font-family: ${this.fontFamily};
    ">`);

    document.write(text);

    document.write("</p>");
  }
}

// Создать объект такого класса и продемонстрировать работу метода.
const printer = new PrintMachine(32, "red");

printer.print("Привет Всем!");

// Реализовать класс, описывающий новость
// (заголовок, текст, массив тегов, дата публикации).
class NewsArticle {
  constructor(title, text, tags = [], date = new Date()) {
    this.title = title;
    this.text = text;
    this.tags = tags;
    this.date = date;
  }

  // - В классе необходимо реализовать один метод print,
  // который выводит всю информацию через document.write()
  print() {
    document.write(`<h2>${this.title}</h2>`);

    document.write(`<p style="
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    ">${this.tags.join(", ")}</p>`);

    document.write(`<p style="
      color: grey;
      font-size: 14px;
      font-weight: 700;
    ">${this.dateText}</p>`);

    document.write(`<p>${this.text}</p>`);
  }

  // - Если с даты публикации прошло менее дня,
  // то выводится «сегодня»,
  // если с даты публикации прошло менее недели,
  // то выводится «N дней назад», в остальных случаях,
  // полная дата в формате «дд.мм.гггг».
  get dateText() {
    const nowMS = Date.now();

    const dateMS = this.date.getTime();

    const diffMS = nowMS - dateMS;

    if (diffMS <= 24 * 60 * 60 * 1000) {
      return "сегодня";
    }

    const daysCount = Math.floor(diffMS / (24 * 60 * 60 * 1000));
    if (daysCount < 7) {
      return daysCount + " дней назад";
    }

    return (
      String(this.date.getDate()).padStart(2, "0") +
      "." +
      String(this.date.getMonth() + 1).padStart(2, "0") +
      "." +
      this.date.getFullYear()
    );
  }
}

const article1 = new NewsArticle(
  "Пожарные спасли котенка",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut dolore eum enim impedit quam iste nobis fuga, doloremque illum corrupti consequuntur sed cupiditate. Consequatur magni voluptates tenetur suscipit dignissimos perferendis.",
  ["здоровье", "коммунальные службы"],
  new Date("2021-06-01")
);

article1.print();
