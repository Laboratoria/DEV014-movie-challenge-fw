// src/utils/transformers.ts
//la transformacion de datos adapta datos recibidos de la API "ApiMovie" a otro mas conveniente Movie
// Definición del modelo de negocio Movie
interface Movie {
    id: number;
    original_title: string;
    release_date: string;
    genre_ids: number[];
    overview: string;
    vote_average: number;
    poster_path: string;
  }
  
  // Definición del modelo de datos de la API
  interface ApiMovie {
    adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  }
  
  // Función para transformar los datos de la API al modelo de negocio
  //Movie es la estructura del objeto que devolvera
  //Movie es un nuevo objeto, usa datos del apiMovie para llenar las propiedades del objeto Movie
  export function formatMovie(apiMovie: ApiMovie): Movie {
    return {
      id: apiMovie.id,
      original_title: apiMovie.original_title,
      release_date: apiMovie.release_date,
      genre_ids: apiMovie.genre_ids,
      overview: apiMovie.overview,
      vote_average: apiMovie.vote_average,
      poster_path: apiMovie.poster_path,
    };
  }
  