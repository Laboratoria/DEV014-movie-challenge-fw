import { formatMovie } from "../utils/transformers";
import { Movie } from "../models/Movie";
import { token } from "../constans";

export class APIService {
  getMovies(
    filters: { page: number } = { page: 1 }
  ): Promise<{
    metaData: { pagination: { currentPage: number; totalPages: number } };
    movies: Movie[];
  }> {
    return fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${filters.page}&sort_by=popularity.desc`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((moviesResult) => {
        const movies = formatMovie(moviesResult);
        return {
          metaData: {pagination: { currentPage: moviesResult.page, totalPages: moviesResult.total_pages } },
          movies: movies
        }
      })
      .catch((error) => {
        throw error;
      });
  }
}
