import { Movie } from "../models/Movie";

export function formatMovie(apiMovieData: any): Movie[] {
  return apiMovieData.results.map(
    (movie: any): Movie => ({
      title: movie.title,
      poster: movie.poster_path,
      year: movie.release_date,
      overview: movie.overview,
      rating: movie.vote_average,
    })
  );
}
export function formatGenresToMap (movieGenres: any) {
 return new Map( movieGenres.genres)
}