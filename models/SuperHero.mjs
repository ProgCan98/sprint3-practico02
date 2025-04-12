// Se define el modelo de datos para superheroes utilizando Mongoose, estableciendo la estructura y las reglas de validacion para los documentos que seran almacenados en MongoDB.

import mongoose from 'mongoose';

const superheroSchema = new mongoose.Schema({
  nombreSuperHeroe: { type: String, required: true },
  nombreReal: { type: String, required: true },
  edad: { type: Number, min: 0 },
  planetaOrigen: { type: String, default: 'Desconocido' },
  debilidad: String,
  poderes: [String],
  aliados: [String],
  enemigos: [String],
  creador: String,
  createdAT: { type: Date, default: Date.now },
});
const superHero = mongoose.model('SuperHero', superheroSchema, 'Grupo-17');
export default superHero;

// Esto asegura que cada documento en la coleccion de superheroes siga una estructura consistente, lo que permite tener un control de calidad sobre los datos.
// Con mongoose se facilita la validacion y gestion de los datos, garantizando que cada documento cumpla con los requisitos del esquema, como la obligatoriedad de ciertos campos y los tipos de datos.
