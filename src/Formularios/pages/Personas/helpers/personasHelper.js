import {personas} from "../data/Personas";

export const getAllPersonas = () => {
  return personas;
};

export const getPersonaById = (id) => {
  const persona = personas.find((p) => p.id === id);
  return persona;
};
