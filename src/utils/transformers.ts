import { Movie } from "../models/Movie";

export function formatMovie(
  apiMovieData: any,
  moviesGenres: Map<number, string>
): Movie[] {
  return apiMovieData.results.map(
    (movie: any): Movie => ({
      title: movie.title,
      poster: movie.poster_path,
      year: movie.release_date,
      overview: movie.overview,
      rating: movie.vote_average,
      genres: movie.genre_ids.map((genre_id) => moviesGenres.get(genre_id)),
    })
  );
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
    return { value: movieGenre.id.toString(), label: movieGenre.name};
  });
}
