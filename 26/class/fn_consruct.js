function getDog(name = prompt("Назови собачку"), breed = "Дворняга") {
  return {
    // name: name,
    name,
    breed,
    age: 0,
    maxAge: 15,

    birthDay() {
      this.age++;
    },

    isAlive() {
      return this.age < this.maxAge;
    },
  };
}

const dog = getDog("Тузик");

console.log(dog.age);

console.warn("прошел Год");
dog.birthDay();

console.log(dog.age);

// Вызывает колбек (функция, переданная первым аргументом) 
// через интервал, раз в секунду (1000мс, второй агрумент) 
const intervalID = setInterval(() => {
  dog.birthDay();

  if (dog.isAlive()) {
    console.log("Ура, с днем рождения, " + dog.name);
  } else {
    console.log("😢 😢 😢");

    // остановка интервала
    clearInterval(intervalID);
  }
}, 1000);
