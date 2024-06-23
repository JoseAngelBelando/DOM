// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const titleElement = document.getElementById('title');

console.dir(titleElement);

console.dir(titleElement.parentElement);
console.dir(titleElement.nextElementSibling);

// ejercicio 1

const startPointElement = document.getElementById('start-point');

console.dir(startPointElement);
console.log(
  `Soy un ${startPointElement.tagName} con el id es ${startPointElement.id} y con la clase ${startPointElement.classList} mi padre es un ${startPointElement.parentElement.className} con la clase ${startPointElement.parentElement.classList} y con id ${startPointElement.parentElement.id} mi hermano es un ${startPointElement.previousElementSibling.tagName} con la clase${startPointElement.previousElementSibling.classList} y con el id ${startPointElement.previousElementSibling.id} mi otro hermano es${startPointElement.previousElementSibling.previousElementSibling.tagName} con el id${startPointElement.previousElementSibling.previousElementSibling.id} y la clase ${startPointElement.previousElementSibling.previousElementSibling.className}`
);

// ejercicio 2

const firstListElement = document.getElementById('first-list');
const secondListElement = document.getElementById('second-list');

const firstContent = firstListElement.textContent;
const secondContent = secondListElement.textContent;

firstListElement.textContent = secondContent;
secondListElement.textContent = firstContent;

//ejercicio 3

const headerElements = document.querySelectorAll('header').length;

console.log(headerElements);
