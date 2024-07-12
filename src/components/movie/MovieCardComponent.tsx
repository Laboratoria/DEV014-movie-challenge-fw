import { Movie } from "../../models/Movie";
import { Link } from "react-router-dom";
import { image500SrcUrl } from "../../services/APIService";

interface MovieCard {
  movie: Movie;
}

export function MovieCardComponent({ movie }: MovieCard) {
  return (
    <li className="movie">
      <Link to={"/movie-detail/" + movie.id}>
        <img className="movie-poster" src={image500SrcUrl + movie.poster} />
      </Link>
      <div className="movie-information">
        <div className="movie-title-container">
          <h2 className="movie-title">{movie.title}</h2>
        </div>
        <div className="movie-info-container">
          <p className="movie-release-year">{movie.releseaDate}</p>
        </div>
      </div>
    </li>
  );
}
