import { Movie } from "../models/Movie";
import "./MovieCard.css"
import { useNavigate } from 'react-router-dom';
type moviecardprops = {
 movie:Movie
}

export function MovieCard({movie}: moviecardprops) {
  const navigate = useNavigate();
  return (
    <div className="movieClassContainer">
      <img onClick={()=>{navigate(`/movie/${movie.id}`)}}  src={"https://image.tmdb.org/t/p/w500/"+movie.poster}></img>
      <h3 className="tittleName">{movie.title}</h3>
      <p className="pName">{movie.year}</p>
      <p className="pGenre">{movie.genres}</p>
    </div>
  );
}
