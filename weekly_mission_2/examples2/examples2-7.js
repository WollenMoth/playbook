// Ejemplo 7: Setters para modificar los atributos del objeto
class MissionCommander {
  constructor(name, mission) {
    this.name = name;
    this.mission = mission;
    this._students = 0;
    this._lives = 0;
  }

  get students() {
    return this._students;
  }

  get lives() {
    return this._lives;
  }

  set students(value) {
    if (typeof value !== "number")
      throw new Error("El valor debe ser un número");
    if (value < 0) throw new Error("El valor debe ser mayor o igual a 0");
    this._students = value;
  }

  set lives(value) {
    if (typeof value !== "number")
      throw new Error("El valor debe ser un número");
    if (value < 0) throw new Error("El valor debe ser mayor o igual a 0");
    this._lives = value;
  }
}

console.log("Ejemplo 7: Setters para modificar los atributos del objeto");
const missionCommanderNode = new MissionCommander("Carlo", "NodeJS");

console.log(missionCommanderNode.students); // 0 por default
console.log(missionCommanderNode.lives); // 0 por default

// actualizamos los atributos por medio de los setters
missionCommanderNode.students = 100;
missionCommanderNode.lives = 3;

console.log(missionCommanderNode.students); // 0 por default
console.log(missionCommanderNode.lives); // 0 por default
