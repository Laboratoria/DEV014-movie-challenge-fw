import React from 'react';
import { Movie } from '../models/Movie.ts';
import MovieCard from './MovieCard';

interface MovieCardProps {
    movie: Movie[];
}
    
const MovieList: React.FC<MovieCardProps> = ({ movie }) => {
    return (
        <ul data-testid="movie-list" className='row ms-0 ps-0' >
            {movie.map((movie) => (
                <li key={movie.title} className='col-6 col-md-4 col-lg-3 list-unstyled'>
                    <MovieCard movie={movie} />
                </li>
            ))}
        </ul>
    );
};

export default MovieList