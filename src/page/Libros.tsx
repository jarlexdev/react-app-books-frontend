import { useEffect, useState } from 'react';
import { getLibros, Libro } from '../api/librosApi';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export default function Libros() {
  const [libros, setLibros] = useState<Libro[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    getLibros()
      .then(setLibros)
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p className="text-red-600 text-center mt-4">{error}</p>;

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">📚 Listado de Libros</h2>
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          <FaArrowLeft />
          Volver al Dashboard
        </button>
      </div>

      {libros.length === 0 ? (
        <p className="text-gray-600">No hay libros registrados.</p>
      ) : (
        <div className="overflow-x-auto bg-white rounded shadow">
          <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-3 font-semibold">Título</th>
                <th className="px-6 py-3 font-semibold">Autor</th>
                <th className="px-6 py-3 font-semibold">Editorial</th>
                <th className="px-6 py-3 font-semibold">Género</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {libros.map((libro) => (
                <tr key={libro.id} className="hover:bg-gray-50">
                  <td className="px-6 py-3">{libro.titulo}</td>
                  <td className="px-6 py-3">{libro.autor}</td>
                  <td className="px-6 py-3">{libro.editorial}</td>
                  <td className="px-6 py-3">{libro.genero}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
