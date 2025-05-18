export interface Miembro {
  id: string;
  nombre: string;
  apellido: string;
  direccion: string;
  telefono: string;
  email: string;
}

export async function getMiembros(): Promise<Miembro[]> {
  const response = await fetch('http://localhost:5000/api/miembros');
  if (!response.ok) {
    throw new Error('Error al obtener miembros');
  }
  return await response.json();
}
