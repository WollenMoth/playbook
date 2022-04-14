// Ejemplo 4: Objeto con métodos
const pet = {
  name: "Maui",
  // Esta es una función que se guarda como propiedad
  sayHello() {
    // this.name hace referencia a la propiedad del objeto
    console.log(`¡${this.name} te saluda en español!`);
  },
  bark() {
    console.log(`¡${this.name} está ladrando!`);
  },
};

console.log("Ejemplo 4: Objeto con métodos");
pet.sayHello();
pet.bark();
