import React from 'react';
import { Movie } from '../models/Movie.ts';

interface MovieCardProps {
    movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    const { poster_path} = movie;
     const defaultImage= 'public/images.png'

    return (
        <div className='text-center'>
            <img className='custom-img' src={poster_path} alt="Poster" onError={(e) => {
          e.currentTarget.src = defaultImage;}}/>
        </div>
    );
};

export default MovieCard;
