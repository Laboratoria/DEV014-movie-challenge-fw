import getMovieGenres from "./movieService";
import { token } from "./token";

const mockFetchResponse = (data: any) => {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve(data),
    } as Response);
  };
  
  describe('getMovieGenres', () => {
    afterEach(() => {
      jest.resetAllMocks(); // Limpia las simulaciones después de cada prueba
    });
  
    it('fetches movie genres successfully', async () => {
      const mockGenres = [
        { id: 1, name: 'Action' },
        { id: 2, name: 'Comedy' }
      ];
      
      // Simula una respuesta exitosa de fetch
      global.fetch = jest.fn(() =>
        mockFetchResponse({ genres: mockGenres })
      );
  
      const genres = await getMovieGenres();
  
      expect(genres).toEqual(mockGenres);
      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith('https://api.themoviedb.org/3/genre/movie/list?', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
    });
  
    it('returns an empty array when fetch fails', async () => {
      // Simula un fallo en fetch
      global.fetch = jest.fn(() => Promise.reject(new Error('Failed to fetch')));
  
      const genres = await getMovieGenres();
  
      expect(genres).toEqual([]);
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });
  
    it('throws an error when response is not ok', async () => {
      // Simula una respuesta no exitosa de fetch
      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: false,
          json: () => Promise.resolve({})
        } as Response)
      );
  
      await expect(getMovieGenres()).rejects.toThrow('Failed to fetch movie genres');
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });
  });