import Movie from "../models/Movie";
import MovieCard from "./MovieCard";

interface MovieListProps {
movies: Movie[]
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {

  return (
    <ul  className="container-list-movie">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie}/>
      ))}
    </ul>
  );
};

export default MovieList;
