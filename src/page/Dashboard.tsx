import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaSignOutAlt, FaBook, FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-gray-700">
          Biblioteca
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button
            onClick={() => navigate("/libros")}
            className="flex items-center px-4 py-2 rounded hover:bg-gray-700 w-full text-left"
          >
            <FaBook className="mr-2" />
            Libros
          </button>
          <button
          onClick={() => navigate("/miembros")}
          className="flex items-center px-4 py-2 rounded hover:bg-gray-700 w-full text-left"
        >
          <FaUsers className="mr-2" />
          Miembros
        </button>

        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between bg-white shadow p-4">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            {user && (
              <>
                <span className="text-gray-700">{user.name}</span>
                <img
                  src={user.picture}
                  alt="Avatar"
                  className="w-8 h-8 rounded-full"
                />
                <button
                  onClick={logout}
                  className="text-red-500 hover:text-red-700"
                  title="Cerrar sesión"
                >
                  <FaSignOutAlt />
                </button>
              </>
            )}
          </div>
        </header>

        {/* Body content */}
        <main className="flex-1 p-6 bg-gray-100">
          <h2 className="text-2xl font-bold mb-4">¡Bienvenido al sistema de biblioteca!</h2>
          <p className="text-gray-600">
            Selecciona una opción del menú para comenzar.
          </p>
        </main>
      </div>
    </div>
  );
}
