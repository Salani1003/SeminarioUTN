import {Route, Routes} from "react-router-dom";
import {AuthRoutes} from "../auth/routes/AuthRoutes";
import {FormulariosRoute} from "../Formularios/routes/FormulariosRoute";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/*" element={<FormulariosRoute />} />
    </Routes>
  );
};
