import { token } from "../constans";

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
