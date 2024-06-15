import { Movie } from "../models/Movie";
import { MovieCard } from "./MovieCard";
import "./MovieList.css"

export function MovieList(props: { movielist: Movie[] }) {
    return (
        <div className="containerlist">
            {props.movielist.map(function(movie, index) {
                return <MovieCard key={index} movie={movie} />;
            })}
        </div>
    );
}
