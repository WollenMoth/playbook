import Viajero from "./viajero.js";

/*
Este es un ejemplo de como modularizar clases y usarlas mediante módulos.
*/

const viajero = new Viajero("André", "WollenMoth", "Node JS", "Abril 2022");
console.log(viajero);
console.log(viajero.getNameAndUsername()); // Método de la clase padre
console.log(viajero.getGeneralInfo()); // Método de la clase hija
