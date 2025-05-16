import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaSignOutAlt } from "react-icons/fa";

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);
  return (
    <div className="flex-1 flex flex-col">
      <header className="flex items-center justify-between bg-white shadow p-4">
        <h1 className="text-x1 font-semibold">Dashboard</h1>
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
              >
                <FaSignOutAlt />
              </button>
            </>
          )}
        </div>
      </header>
    </div>
  );
}
