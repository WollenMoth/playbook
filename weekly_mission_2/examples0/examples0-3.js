// Ejemplo 3: Objeto con diferentes propiedades
const pet = {
  name: "Maui",
  age: 1,
  nicknames: ["Mauichol", "Mauil", "Mauichín"],
  address: {
    zip_code: "11111",
    street: "Fake Street",
    city: "Fake City",
  },
};

console.log("Ejemplo 3: Objeto con diferentes propiedades");
console.log(pet);
console.log(pet.name);
console.log(pet["address"]);
