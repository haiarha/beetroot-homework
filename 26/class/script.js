

const catData = { // сохранение ссылки на объект 
  name: 'Пушок',
  breed: 'siam',

  age: 3,

  paw: {
    claws: true,
    pads: true,
  },

  petTheCat: function() {
    console.log(this.name, 'says:', 'Mrrr-mrrr-mrrr');
  }
};




console.log('Возраст кота -', catData.age, 'года');


const nameKey = 'name';
console.log('Имя кота -', catData[nameKey], 'года');

catData[nameKey] = 'Васек';

console.log('Новое имя кота -', catData.name);


// ====================================
// передача по ссылке
const catCloneData = catData;
// ====================================

console.warn('Кот был клонирован');

catCloneData.name = 'Клончик';


console.log('Новое имя кота-клона -', catCloneData.name);

console.log('А имя оригинального кота -', catData.name);

// первый способ клонирования
const secondCloneCatData = {
  ...catData,

  paw: {
    ...catData.paw
  }
};
// второй способ клонирования (отбрасывает методы объекта)
// const secondCloneCatData = JSON.parse(JSON.stringify(
//   catData
// ));

console.log('Это в виде объекта', catData);

const stringCat = JSON.stringify(catData);
console.log('Это в виде текста', stringCat);

const backToObjectCat = JSON.parse(stringCat)

console.log('Обратно в виде объекта', backToObjectCat);



console.warn('Кот был снова клонирован');

secondCloneCatData.name = 'Супер-клончик';
secondCloneCatData.paw.claws = false;


console.log('Новое имя второго кота-клона -', secondCloneCatData.name);
console.log('Когти острые? -', secondCloneCatData.paw.claws);
secondCloneCatData.petTheCat();

console.log('А имя оригинального кота -', catData.name);
console.log('Когти острые? -', catData.paw.claws);


// const breed = catData.breed;
// const name = catData.name;

const { 
  name, 
  breed = 'persian', 
  color = 'grey',
} = catData;

console.log(name, breed, color);

console.warn('test methods');

catData.petTheCat();