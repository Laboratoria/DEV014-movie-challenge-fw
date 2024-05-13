// Definir un tipo TypeScript llamado Movie dentro del archivo Movie.d.ts. Incluir campos como título, póster, año de lanzamiento y cualquier otra información 
//relevante necesaria para la interfaz de usuario y la lógica de negocio.
export type Movie = {
    title: string;
    poster: string;
    year: string;
    overview?: string;
    rating?: number; 
};
