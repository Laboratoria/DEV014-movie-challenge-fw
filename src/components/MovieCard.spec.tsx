import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import MovieCard from './MovieCard';
import { Movie } from '../models/Movie';

describe('MovieCard', () => {
  it('Should print all the information from the movie', () => {
    const movieTest: Movie = {
      title: 'The Collection',
      poster_path: '/path/to/poster.jpg',
      year: 2023,
      genres: ['comedy']
    };
    console.log(movieTest.poster_path)
    render(<MovieCard movie={movieTest} />);

    expect(screen.getByText('The Collection, 2023')).toBeInTheDocument();
    expect(screen.getByAltText('Poster')).toHaveAttribute('src', '/path/to/poster.jpg');
  });

});