const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];


//Las pizzas que tengan un id impar.

  const pizzaImpar = pizzas.filter((Impar) => Impar.id % 2 !== 0).map(pizza => pizza.nombre)

  console.log(`Las pizzas impares son: ${pizzaImpar}`)

  console.log("-----------------------------------------")
//¿Hay alguna pizza que valga menos de $600?

const precioMenorA600 = pizzas.filter((pizza) => pizza.precio < 600).map(pizza => pizza.nombre)

console.log(`Si, es esta: ${precioMenorA600}`)

console.log("-----------------------------------------")
//El nombre de cada pizza con su respectivo precio.

const nombrePrecio = pizzas.forEach((nombre) => {
  console.log(`Nombre: ${nombre.nombre} - Precio: ${nombre.precio}`)
})


console.log("-----------------------------------------")
/* Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.
 */

const ingredientesTotales = pizzas.forEach ((pizza) => {
  console.log(`Esta ${pizza.nombre} posee los siguientes ingredientes: ${pizza.ingredientes}`)
})


