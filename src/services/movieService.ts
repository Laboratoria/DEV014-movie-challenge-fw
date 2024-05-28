import { token } from "../constans";
import { formatMovie,formatGenresToMap } from "../utils/transformers";
import { Movie } from "../models/Movie";


export function getMovieGenres(): Promise<[{ id: number; name: string }]> {
    return fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((genresResult) => {
      return genresResult.genres;
    })
    .catch((error) => {
      throw error;
    });
}

export function getMovieDetail(id: number): Promise<Movie> {
  return fetch(`https://api.themoviedb.org/3/movie/${id}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((movieData) => {
      return getMovieGenres().then((movieGenres)=>{
        return formatMovie(movieData,formatGenresToMap(movieGenres));
      }).catch((error)=>{
        throw error
      })

    })
    .catch((error) => {
      console.error('Error al obtener los detalles de la película:', error);
      throw error;
    });
}