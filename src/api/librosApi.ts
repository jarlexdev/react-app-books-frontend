export interface Libro {
    id: string;
    titulo: string;
    autor: string;
    editorial: string;
    genero: string;
}

export async function getLibros(): Promise<Libro[]> {
    const response = await fetch('http://localhost:5000/api/libros');
    if (!response.ok) {
        throw new Error('Error al obtener libros');
    }
    return await response.json();
}
