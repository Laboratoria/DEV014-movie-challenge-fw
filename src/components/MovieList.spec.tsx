import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import MovieList from './MovieList';
import { Movie } from '../models/Movie';

describe('MovieList', () =>{
    it('test if it render all list of movies', () => {
        const movies: Movie[] = [
            {
                title: 'Inception',
                poster_path: '/path/to/inception.jpg',
                year: 2010,
            },
            {
                title: 'The Dark Knight',
                poster_path: '/path/to/dark-knight.jpg',
                year: 2008,
            },
            {
                title: 'Interstellar',
                poster_path: '/path/to/interstellar.jpg',
                year: 2014,
            },
            {
                title: 'The Matrix',
                poster_path: '/path/to/matrix.jpg',
                year: 1999,
            },
            {
                title: 'Avengers: Endgame',
                poster_path: '/path/to/endgame.jpg',
                year: 2019,
            },
        ];
        render(<MovieList movie={movies} />);
        const movieListUl = screen.getByTestId('movie-list'); 
    
        const movieElements = movieListUl.querySelectorAll('li');
        expect(movieElements.length).toBe(5);
    })
   
})