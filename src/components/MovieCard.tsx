import Movie from "../models/Movie";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const base_url = "https://image.tmdb.org/t/p/w500/";
  const fullImageUrl = `${base_url}${movie.poster_path}`;

  return (
    <li className="none-style-li">
      <div className="container-card-image">
        <img src={fullImageUrl} className="movie-card-image" />
      </div>
      <div className="text-card-movie">
        <p className="text-title">{movie.original_title}</p>
        <p className="text-card-year">{movie.release_date}</p>
      </div>
    </li>
  );
};

export default MovieCard;
