import {Navigate, Route, Routes} from "react-router-dom";
import {FormulariosPage} from "../pages/FormulariosPage";
import {Personas} from "../pages/Personas/Administrar";
import {PersonaAddEdit} from "../pages/Personas/AltaEdicion";

export const FormulariosRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<FormulariosPage />} />
      <Route path="/Personas" element={<Personas />} />
      <Route path="/Persona/Agregar" element={<PersonaAddEdit />} />
      <Route path="/Persona/Agregar/:id" element={<PersonaAddEdit />} />

      <Route path="/*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};
