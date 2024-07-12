import { Genre, GenreResponse } from "../models/Movie";
import { formatGenre } from "../utils/transformers";
import { ApiKey } from "./constants";

export function getMovieGenres(): Promise<Genre[]> {
  const genreEndPoint = `https://api.themoviedb.org/3/genre/movie/list?language=en`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${ApiKey}`,
    },
  };

  return fetch(genreEndPoint, options)
    .then((response) => response.json())
    .then((response) => {
      if (response.genres) {
        return response.genres.map((genre: GenreResponse) =>
          formatGenre(genre)
        );
      } else {
        return [];
      }
    });
}
