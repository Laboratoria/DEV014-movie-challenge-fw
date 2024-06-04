import Movie from "../models/Movie";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const base_url = "https://image.tmdb.org/t/p/w500/";
  const fullImageUrl = `${base_url}${movie.poster_path}`;

  return (
    <div className="container-movie-card">
      <div className='container-card-image'>
      <img src={fullImageUrl} className='movie-card-image'/>
      </div>
      <div className="text-card">
      <span className="text-title">
        {movie.original_title} 
      </span>
      <p className="text-card-year">{movie.release_date}</p>
      </div>
    </div>
    
  );
};

export default MovieCard;
