// creare 2 array
const array1 = ['parola1', 'parola2', 'parola3', 'parola4', 'parola5'];
const array2 = ['arr1', 'arr2'];
const li = document.createElement('li');
const createUl = document.createElement('ul')
const ul = document.querySelector('ul').appendChild(li);
const ulChild = document.querySelector('li').appendChild(createUl);
const liChild = document.querySelector('ul').appendChild(li);


