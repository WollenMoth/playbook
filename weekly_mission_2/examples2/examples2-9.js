// Ejemplo  9: Herencia entre dos clases
class Developer {
  constructor(name, mainLang, stack) {
    this._name = name;
    this.mainLang = mainLang;
    this.stack = stack;
  }

  get name() {
    return this._name;
  }
}

console.log("Ejemplo  9: Herencia entre dos clases");
const andreDev = new Developer("André", "Python", ["Django", "React", "Vue"]);
console.log(andreDev);

// Se usa la palabra extends para indicar que heredarás las propiedades de la clase Padre (Developer) en la clase definida.
// Podemos definir una clase vacía y rehusar todos los componentes de la clase padre
class LaunchXStudent extends Developer {}

const andreLaunchXDev = new LaunchXStudent("André", "Python", [
  "Django",
  "React",
  "Vue",
]);
console.log(andreLaunchXDev);
console.log(andreLaunchXDev.name); // getter de la clase padre rehusada en la clase hija
