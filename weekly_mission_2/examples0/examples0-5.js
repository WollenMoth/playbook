// Ejemplo 5: Objeto con método que recibe parámetros
const pet = {
  name: "Maui",
  sayHelloToMyPet(yourPet) {
    console.log(`${this.name} say's hello to ${yourPet}`);
  },
};

console.log("Ejemplo 5: Objeto con método que recibe parámetros");
pet.sayHelloToMyPet("Kenai");
