import {
  Movie,
  MovieResponse,
  MovieDetailsResponse,
  MovieDetails,
} from "../models/Movie";
import { ApiKey } from "./constants";
import { formatMovie, formatMovieDetails } from "../utils/transformers";

export const image500SrcUrl = "https://image.tmdb.org/t/p/w500";
export const imageOriginalSrcUrl = "https://image.tmdb.org/t/p/original";

//define los parametros para la función get movies
interface GetMoviesParams {
  filters: {
    page: number;
    genre: string;
    year: string;
    sortBy: string;
  };
}
//estructura para representar la paginacion con la página actual y el numero total de paginas
interface Pagination {
  currentPage: number;
  totalPages: number;
}

//define la estructura de la respuesta de getmovies
//incluye dato de paginacion y array de pelicules
interface GetMoviesResponse {
  metaData: {
    pagination: Pagination;
  };
  movies: Movie[];
}

// getmovies realiza una solicitud a la API de TMDb para obtener una lista de películas basada en los filtros proporcionados.
export function getMovies(params: GetMoviesParams): Promise<GetMoviesResponse> {
  const { page, genre, year, sortBy } = params.filters;

  // Construcción de la URL de la API con los parámetros de filtro

  let movieListEndpoint = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US`;

  if (page) {
    movieListEndpoint += `&page=${page}`;
  }

  if (genre !== "-") {
    movieListEndpoint += `&with_genres=${genre}`;
  }

  if (year !== "-") {
    movieListEndpoint += `&primary_release_year=${year}`;
  }

  if (sortBy !== "-") {
    movieListEndpoint += `&sort_by=${sortBy}`;
  }
  // Configuración de opciones para la solicitud HTTP
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${ApiKey}`,
    },
  };
  // Realización de la solicitud HTTP y formateo de la respuesta
  return fetch(movieListEndpoint, options)
    .then((response) => response.json())
    .then((response) => {
      if (response.results) {
        const responseMovieList = response.results;
        const formattedMovies: Movie[] = responseMovieList.map(
          (movie: MovieResponse) => formatMovie(movie)
        );
        const pagination: Pagination = {
          currentPage: response.page,
          totalPages: response.total_pages,
        };
        return {
          metaData: { pagination },
          movies: formattedMovies,
        };
      } else {
        // Manejo de caso donde no hay resultados
        return {
          metaData: {
            pagination: {
              currentPage: 1,
              totalPages: 1,
            },
          },
          movies: [],
        };
      }
    });
}

export function getMovieDetail(movieID: string): Promise<MovieDetails> {
  const movieDetailEndpoint = `https://api.themoviedb.org/3/movie/${movieID}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${ApiKey}`,
    },
  };

  return fetch(movieDetailEndpoint, options)
    .then((response) => response.json())
    .then((response: MovieDetailsResponse) => {
      const formattedMoviesDetails = formatMovieDetails(response);
      return formattedMoviesDetails;
    });
}
