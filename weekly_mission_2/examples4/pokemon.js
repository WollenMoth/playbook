/*
Este ejemplo incluye dependencias. En tu línea de comando ve a este proyecto y ejecuta el comando `npm install` para descargar las dependencias, esto creará una carpeta node_modules
*/
export default class Pokemon {
  constructor(name, type, age) {
    this.name = name;
    this.type = type;
    this.age = age;
    this._attacks = [];
  }

  get attacks() {
    return this._attacks;
  }

  set attacks(attacks) {
    return (this._attacks = attacks);
  }
}

const myPokemon = new Pokemon("Charmander", "Fuego", 10);
console.log(myPokemon);
