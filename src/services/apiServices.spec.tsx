import { Services } from './APIService';
import { formatMovie } from '../utils/transformers';

// Simula el fetch global
global.fetch = jest.fn();

describe('Services', () => {
    afterEach(() => {
        jest.resetAllMocks(); // Limpia las simulaciones después de cada prueba
    });

    it('should fetch movies with correct page number and return formatted data', async () => {
        // Define una respuesta simulada para la API
        const mockResponse = {
            results: [
                { id: 1, title: 'Movie 1' }, // Ejemplo de datos
            ],
            page: 1,
            total_pages: 1,
        };

        // Configura la simulación para devolver la respuesta simulada
        (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce({
            ok: true,
            json: async () => mockResponse,
        } as Response);

        const service = new Services();
        const { metaData, movies } = await service.getMovies({ filters: { page: 1 } });

        // Verifica que fetch haya sido llamado con la URL correcta y los encabezados apropiados
        expect(fetch).toHaveBeenCalledWith('https://api.themoviedb.org/3/discover/movie?page=1', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.VITE_TOKEN_API}`
            }
        });

        // Verifica los datos devueltos
        expect(metaData.pagination.currentPage).toBe(1);
        expect(metaData.pagination.totalPages).toBe(1);
        expect(movies).toEqual(mockResponse.results.map((movie: any) => formatMovie(movie)));
    });

    it('should handle fetch error and throw an error', async () => {
        // Configura la simulación para devolver un error
        (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce({
            ok: false,
            json: async () => Promise.reject('Failed to fetch'),
        } as unknown as Response);

        const service = new Services();

        // Verifica que se lance el error correcto
        await expect(service.getMovies({ filters: { page: 1 } })).rejects.toThrow('Failed to fetch movies');
    });
});