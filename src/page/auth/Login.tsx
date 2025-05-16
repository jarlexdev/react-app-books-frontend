import { useContext } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { FaUserCircle } from "react-icons/fa";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex">
      {}
      <div
        className="hidden md:flex w-1/2 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2017/08/06/22/01/books-2596809_960_720.jpg')",
        }}
      >
        <div className="bg-black bg opacity-50 w-full flex items-center justify-center">
          <h2 className="text-white text-4xl font bold px-4">
            Bienvenido a LendBooks
          </h2>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full md:w-1/2 bg-gray-200">
        <div className="w-full max-w-md p-8">
          <div className="flex justify-center mb-6">
            <FaUserCircle className="text-6xl text-gray-700" />
          </div>
          <h1 className="text-2xl font-bold text-center mb-4">
            Iniciar Sesión
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Accede a tu panel de control con tu cueta de Google
          </p>
          <div className="flex justify-center">
            <GoogleLogin
              onSuccess={(res) => {
                if (res.credential) {
                  login(res.credential);
                  navigate("/");
                }
              }}
              onError={() => {
                alert("Fallo al iniciar sesión");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
