import { Movie } from "../models/Movie";
import "./MovieCard.css"
type moviecardprops = {
 movie:Movie
}

export function MovieCard({movie}: moviecardprops) {
  return (
    <div className="movieClassContainer">
      <img  src={"https://image.tmdb.org/t/p/w500/"+movie.poster}></img>
      <h3 className="tittleName">{movie.title}</h3>
      <p className="pName">{movie.year}</p>
      <p className="pGenre">{movie.genres}</p>
    </div>
  );
}
