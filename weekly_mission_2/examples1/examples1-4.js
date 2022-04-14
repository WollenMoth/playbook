// Ejemplo 4: Uso de map para recorrer los elementos de una lista y crear una nueva lista
//Arrow function and explicit return
const arr = [1, 2, 3, 4, 5];
const modifiedArray = arr.map((element) => element);

const numbers = [1, 2, 3, 4, 5];
// const numbersSquare = numbers.map(function (num) {
//   return Math.pow(num, 2);
// });

// También puedes escribir la función como fat arrow
const numbersSquare = numbers.map((num) => Math.pow(num, 2));

console.log("Ejemplo 4: Imprimiendo la lista de elementos al cuadrado");
console.log(numbersSquare);
