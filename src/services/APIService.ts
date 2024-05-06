import { formatMovie } from "../utils/transformers";
import { Movie } from "../models/Movie";
import { token } from "./constans";

export class APIService {
  getMovies(): Promise<Movie[]> { //hacerle mock a getmovies
    return fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
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
        return formatMovie(moviesResult);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        throw error;
      });
  }
}
