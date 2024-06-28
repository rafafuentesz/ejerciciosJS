//elementsbyID
/*const titulo = document.getElementById("titulo");
console.log(titulo);*/

//elementsbyClassName
/*const toppings = document.getElementsByClassName("topping");
console.log(toppings);*/

//elementsbyTagName
/*const misToppings = document.getElementsByTagName("li");
console.log(misToppings);*/

//queryselector (se pueden combinar clases y id)
/*const primerToppingNoMarron = document.querySelector('ul li:not(.fondo-marron)');
console.log(primerToppingNoMarron);*/

//queryselectorall
/*const toppingsNaranja = document.querySelectorAll('.topping.fondo-naranja');
console.log(toppingsNaranja);*/

//asignar estilo con js
// const primerTopping = document.querySelector('.topping');
// primerTopping.style.backgroundColor = 'blue';
// primerTopping.style.color = 'green';
// primerTopping.style.textTransform = 'uppercase';

//acceder al texto
// const listaDeToppings = document.getElementById('lista');
// console.log("innertext");
// console.log(listaDeToppings.innerText)

// console.log("textcontent");
// console.log(listaDeToppings.textContent)

// console.log("innerHTML");
// console.log(listaDeToppings.innerHTML)

//MODIFICAR CONTENIDO--
// const titulo = document.getElementById('titulo');
// titulo.innerText = 'Toppings de Pizza';

//atributos
// const enlace = document.getElementsByTagName('a');
// console.log(enlace[0].setAttribute('href', 'www.instagram.com'));

//agregar y modificar clases
// const primerTopping = document.querySelector('.topping');

//agregar clase
// primerTopping.classList.add('texto-negro');

//saber si tiene una clase
// console.log(primerTopping.classList.contains('fondo-marron'));

//remover clase
// primerTopping.classList.remove('fondo-marron');

// console.log(primerTopping.classList);

//crear un elemento
// const listaDeToppings = document.getElementById('lista');
// const toppingNuevo = document.createElement('li');
// //agregar
// toppingNuevo.classList.add('topping', 'fondo-marron');
// toppingNuevo.innerText = 'Piña';
// listaDeToppings.appendChild(toppingNuevo);
// //remover
// toppingNuevo.remove();

//RECORRER EL DOM
// const listaDeToppings = document.getElementById('lista');
// //padre
// console.log(listaDeToppings.parentElement.parentElement);
// //hijos
// console.log(listaDeToppings.children[0]);
// console.log(listaDeToppings.firstElementChild);
// //hermanos
// console.log(listaDeToppings.previousElementSibling);

//EVENTOS CON ONEVENT EN HTML (poner funcion onclick en cada li)

const toppings = document.getElementsByClassName('topping');

for (const topping of toppings) {
    topping.addEventListener('click', (e) => {
        console.log(e.target.innerText);
    })
}
