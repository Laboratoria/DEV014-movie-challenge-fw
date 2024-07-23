import { formatMovie } from './transformers';
import { Movie } from '../models/Movie';

describe('formatMovie', () => {
    it('debería transformar correctamente un objeto de datos válido', () => {
      const apiData = {
        belongs_to_collection: {
          name: 'The Collection',
          poster_path: '/path/to/poster.jpg',
        },
        release_date: '2023-07-05',
      };
  
      const expectedMovie: Movie = {
        title: 'The Collection',
        poster_path: '/path/to/poster.jpg',
        year: 2023,
      };
  
      expect(formatMovie(apiData)).toEqual(expectedMovie);
    });
  
    it('debería manejar datos faltantes en belongs_to_collection', () => {
      const apiData = {
        release_date: '2023-07-05',
      };
  
      const expectedMovie: Movie = {
        title: '',
        poster_path: '',
        year: 2023,
      };
  
      expect(formatMovie(apiData)).toEqual(expectedMovie);
    });
  
    it('debería manejar una fecha de lanzamiento inválida', () => {
      const apiData = {
        belongs_to_collection: {
          name: 'The Collection',
          poster_path: '/path/to/poster.jpg',
        },
        release_date: 'invalid-date',
      };
  
      expect(() => formatMovie(apiData)).not.toThrow();

    });
  
    it('debería manejar propiedades indefinidas', () => {
      const apiData = {};
  
      const expectedMovie: Movie = {
        title: '',
        poster_path: '',
        year: NaN,
      };
  
      expect(formatMovie(apiData)).toEqual(expectedMovie);
    });
  
    it('debería manejar una fecha de lanzamiento nula', () => {
      const apiData = {
        belongs_to_collection: {
          name: 'The Collection',
          poster_path: '/path/to/poster.jpg',
        },
        release_date: null,
      };
  
      expect(() => formatMovie(apiData)).not.toThrow();
      // Puedes ajustar esto según cómo manejes errores en tu función
    });
  });