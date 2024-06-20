// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const titleElement = document.getElementById('title');

console.dir(titleElement);

console.dir(titleElement.parentElement);
console.dir(titleElement.nextElementSibling);

const startPointElement = document.getElementById('start-point');

console.dir(startPointElement);
console.log(
  `Soy un ${startPointElement.tagName} con el id es ${startPointElement.id} y la clase ${startPointElement.classList} mi padre es un header ${.parentElement} con la clase`
);
