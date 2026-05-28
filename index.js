import { registrar, leer } from "./operaciones.js";

// Capturamos los argumentos escritos en la terminal
const argumentos = process.argv.slice(2);

// Desestructuramos los argumentos en variables individuales
const [operacion, nombre, edad, animal, color, enfermedad] = argumentos;

// Si el usuario escribe "registrar", se ejecuta la función registrar
if (operacion === "registrar") {
  registrar(nombre, edad, animal, color, enfermedad);
}

// Si el usuario escribe "leer", se muestran las citas registradas
if (operacion === "leer") {
  leer();
}