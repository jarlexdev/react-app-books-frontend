import { useEffect, useState } from 'react';
import { getMiembros, Miembro } from '../api/miembrosAPi';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaUsers } from 'react-icons/fa';

export default function Miembros() {
  const [miembros, setMiembros] = useState<Miembro[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    getMiembros()
      .then(setMiembros)
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p className="text-red-600 text-center mt-4">{error}</p>;

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
          <FaUsers />
          Listado de Miembros
        </h2>
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          <FaArrowLeft />
          Volver al Dashboard
        </button>
      </div>

      {miembros.length === 0 ? (
        <p className="text-gray-600">No hay miembros registrados.</p>
      ) : (
        <div className="overflow-x-auto bg-white rounded shadow">
          <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-3 font-semibold">Nombre</th>
                <th className="px-6 py-3 font-semibold">Apellido</th>
                <th className="px-6 py-3 font-semibold">Dirección</th>
                <th className="px-6 py-3 font-semibold">Teléfono</th>
                <th className="px-6 py-3 font-semibold">Email</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {miembros.map((m) => (
                <tr key={m.id} className="hover:bg-gray-50">
                  <td className="px-6 py-3">{m.nombre}</td>
                  <td className="px-6 py-3">{m.apellido}</td>
                  <td className="px-6 py-3">{m.direccion}</td>
                  <td className="px-6 py-3">{m.telefono}</td>
                  <td className="px-6 py-3">{m.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
