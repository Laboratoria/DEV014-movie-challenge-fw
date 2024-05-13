import {render} from '@testing-library/react'
import { MovieCard } from "./MovieCard";
import { Movie } from '../models/Movie';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';

describe ('movie card funciona correctamente', () => {
    it('se comprueba que el titulo, el año y el poster esten correctamente', () => {
        const movie: Movie = {
            title: 'titanic',
            year: '2022',
            poster: 'test-poster-url.jpg'
          };
    
          const { getByText } = render(<MovieCard movie={movie} />);
         
          const titleElement = getByText('titanic');
          expect(titleElement).toBeInTheDocument();
      
          const yearElement = getByText('2022');
          expect(yearElement).toBeInTheDocument();

        });
})