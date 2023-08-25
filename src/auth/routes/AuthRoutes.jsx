import {Navigate, Route, Routes} from "react-router-dom";
import {LoginPage, RegisterPage} from "../pages";
import {RecoveryPage} from "../pages/RecoveryPage";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="recuperar" element={<RecoveryPage />} />
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
