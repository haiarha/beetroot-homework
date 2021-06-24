console.log(document.title);

console.log(document.body.style);

document.body.style.background = 'red';

document.body.innerHTML = '<h1 id="heading">Привет!</h1>';

const h1 = document.getElementById('heading');


// h1.title = 'TEST'
h1.setAttribute('title', 'TEST')



// console.log(h1.title);
console.log(h1.getAttribute('title'));

