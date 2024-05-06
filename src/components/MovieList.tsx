import { Movie } from "../models/Movie";
import { MovieCard } from "./MovieCard";

export function MovieList(props: { movielist: Movie[] }) {
    return (
        <div>
            {props.movielist.map(function(movie, index) {
                return <MovieCard key={index} movie={movie} />;
            })}
        </div>
    );
}
