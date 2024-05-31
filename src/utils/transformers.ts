// src/utils/transformers.ts
//la transformacion de datos adapta datos recibidos de la API "ApiMovie" a otro mas conveniente Movie
// Definición del modelo de negocio Movie
import ApiMovie from "../models/ApiMovieList";
import Movie from "../models/Movie";

// Función para transformar los datos de la API al modelo de negocio
//Movie es la estructura del objeto que devolvera
//Movie es un nuevo objeto, usa datos del apiMovie para llenar las propiedades del objeto Movie
export function formatMovie(apiMovie: ApiMovie): Movie {
  return {
    adult: apiMovie.adult,
    backdrop_path: apiMovie.backdrop_path,
    genre_ids: apiMovie.genre_ids,
    id: apiMovie.id,
    original_language: apiMovie.original_language,
    original_title: apiMovie.original_title,
    overview: apiMovie.overview,
    popularity: apiMovie.popularity,
    poster_path: apiMovie.poster_path,
    release_date: apiMovie.release_date,
    title: apiMovie.title,
    video: apiMovie.video,
    vote_average: apiMovie.vote_average,
    vote_count: apiMovie.vote_count,
  };
}
