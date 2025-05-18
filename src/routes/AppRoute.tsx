import { Routes, Route, Navigate } from "react-router-dom";
import { useContext, JSX } from "react";
import { AuthContext } from "../context/AuthContext";
import Login from "../page/auth/Login";
import Dashboard from "../page/Dashboard";
import Libros from "../page/Libros";
import Miembros from "../page/Miembros";

function PrivateRoute({ children }: { children: JSX.Element }) {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" replace />;
}

export default function AppRoute() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/libros"
        element={
          <PrivateRoute>
            <Libros />
          </PrivateRoute>
        }
      />
      <Route
        path="/miembros"
        element={
          <PrivateRoute>
            <Miembros />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
