import { formatMovie, formatGenresToMap } from "../utils/transformers";
import { Movie } from "../models/Movie";
import { token } from "../constans";
import { getMovieGenres } from "./movieService";

export class APIService {
  getMovies(
    filters: { page: number; genreId: number | null; sortBy: string | null } = {
      page: 1,
      genreId: null,
      sortBy: null,
    }, genresMap: Map<number, string>
  ): Promise<{
    metaData: { pagination: { currentPage: number; totalPages: number } };
    movies: Movie[];
  }> {
    return fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${filters.page}&sort_by=popularity.desc&with_genres=${filters.genreId || ""}&sort_by=${filters.sortBy || ""}`,
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
            const movies = formatMovie(
              moviesResult,
              genresMap
            );
            return {
              metaData: {
                pagination: {
                  currentPage: moviesResult.page,
                  totalPages: moviesResult.total_pages,
                },
              },
              movies: movies,
            };
      })
      .catch((error) => {
        throw error;
      });
  }
}
