import fs from "fs";

// Función para registrar una nueva cita
const registrar = (nombre, edad, animal, color, enfermedad) => {

  const citas = JSON.parse(fs.readFileSync("citas.json", "utf8"));

  const nuevaCita = {
    nombre,
    edad,
    animal,
    color,
    enfermedad
  };

  citas.push(nuevaCita);

  fs.writeFileSync("citas.json", JSON.stringify(citas, null, 2));

};

// Función para mostrar todas las citas registradas
const leer = () => {

  const citas = JSON.parse(fs.readFileSync("citas.json", "utf8"));

  console.log(citas);

};

export { registrar, leer };