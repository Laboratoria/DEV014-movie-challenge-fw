// utils.ts

import { Movie } from "../models/Movie";

export function formatMovie(
  apiMovieData: any,
  moviesGenres: Map<number, string>
): Movie {
  return {
    id: apiMovieData.id,
    title: apiMovieData.title,
    poster: apiMovieData.poster_path,
    year: apiMovieData.release_date,
    overview: apiMovieData.overview,
    rating: apiMovieData.vote_average,
    genres:
      apiMovieData.genre_ids?.map((genre_id) => moviesGenres.get(genre_id)) ||
      apiMovieData.genres.map((genre_id) => moviesGenres.get(genre_id)),
  };
}

export function formatGenresToMap(movieGenres: { id: number; name: string }[]) {
  return new Map<number, string>(
    movieGenres.map((movieGenre) => [movieGenre.id, movieGenre.name])
  );
}

export function formatGenresToOptions(
  movieGenres: { id: number; name: string }[]
) {
  return movieGenres.map((movieGenre: { id: number; name: string }) => {
    return { value: movieGenre.id.toString(), label: movieGenre.name };
  });
}
