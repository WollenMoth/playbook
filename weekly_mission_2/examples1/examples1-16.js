// Ejemplo 16: Ordenando una lista de objetos
const users = [
  { name: "A", age: 150 },
  { name: "B", age: 50 },
  { name: "C", age: 100 },
  { name: "D", age: 22 },
];

// Ordenar por edad

// users.sort((a, b) => {
//   // podemos invocar una función
//   if (a.age < b.age) return -1;
//   if (a.age > b.age) return 1;
//   return 0;
// });

users.sort((a, b) => a.age - b.age);

console.log("Ejemplo 16: Ordenando una lista de objetos por la edad");
console.log(users); // sorted ascending
