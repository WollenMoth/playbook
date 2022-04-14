// Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas
const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];
const countriesFirstThreeLetters = countries.map(
  (country) => country.toUpperCase().slice(0, 3) // el método slice obtiene solo la longitud marcada del string
);
console.log(
  "Ejemplo 6: Uso de map para convertir las primeras tres letras de los nombres de una lista a mayúsculas"
);
console.log(countriesFirstThreeLetters);