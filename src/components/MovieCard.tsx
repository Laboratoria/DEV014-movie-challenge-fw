import { Movie } from "../models/Movie";
import "./MovieCard.css"

export function MovieCard(props: { movie: Movie }) {
  return (
    <div className="movieClassContainer">
      <img  src={"https://image.tmdb.org/t/p/w500/"+props.movie.poster}></img>
      <h3 className="tittleName">{props.movie.title}</h3>
      <p className="pName">{props.movie.year}</p>
      {/* <p>{props.movie.overview}</p>
      <p>{props.movie.rating}</p> */}
    </div>
  );
}
