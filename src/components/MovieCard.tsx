import { Movie } from "../models/Movie";

export function MovieCard(props: { movie: Movie }) {
  return (
    <div>
      <h1>{props.movie.title}</h1>
      <p>{props.movie.poster}</p>
      <p>{props.movie.year}</p>
      <p>{props.movie.overview}</p>
      <p>{props.movie.rating}</p>
    </div>
  );
}
