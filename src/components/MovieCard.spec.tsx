import {render} from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import { MovieCard } from "./MovieCard";
import { Movie } from '../models/Movie';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';

describe ('movie card funciona correctamente', () => {
    it('se comprueba que el titulo y el año esten correctamente', () => {
        const movie: Movie = {
            id: 123,
            title: 'titanic',
            year: '2022',
            poster: 'test-poster-url.jpg',
            genres: ["accion", "aventura"]
          };
    
          const { getByText } = render(
            <Router> 
                <MovieCard movie={movie} />
            </Router>
        );
         
          const titleElement = getByText('titanic');
          expect(titleElement).toBeInTheDocument();
      
          const yearElement = getByText('2022');
          expect(yearElement).toBeInTheDocument();

        });
})