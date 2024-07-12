import { Movie } from "../../models/Movie";
import { MovieCardComponent } from "./MovieCardComponent";

interface MovieListComponent {
  movies: Movie[];
}

export function MovieListComponent({ movies }: MovieListComponent) {
  const maxItemsPerPage = 12;

  // Solo muestra 10 peliculas
  const filterMovies = movies.slice(0, maxItemsPerPage);

  return (
    //el key es para que react identifique en el virtual dom que va a cambiar
    <ul className="movie-list">
      {filterMovies.map((movie) => (
        <MovieCardComponent key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
