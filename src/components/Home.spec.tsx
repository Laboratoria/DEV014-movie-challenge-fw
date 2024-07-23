// import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';
import { Services } from '../services/APIService';

// Mock de la API
jest.mock('../services/APIService', () => ({
  Services: jest.fn().mockImplementation(() => ({
    getMovies: jest.fn(),
  })),
}));

// Mock del token
jest.mock('../token', () => ({ token: 'mocked-token' }));

describe('Home component', () => {
  let mockGetMovies: jest.Mock;

  beforeEach(() => {
    mockGetMovies = jest.fn();
    (Services as jest.Mock).mockImplementation(() => ({
      getMovies: mockGetMovies,
    }));
    jest.clearAllMocks();
  });

  test('debe mostrar un cargador mientras se obtienen los datos', async () => {
    mockGetMovies.mockResolvedValueOnce({ movies: [], metaData: { pagination: { currentPage: 1, totalPages: 3 } } });

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByRole('status')).toBeInTheDocument(); // Asegúrate de que el spinner tenga un rol de "status" o usa el texto adecuado
  });

  test('debe mostrar las películas correctamente', async () => {
    const mockMovies = [
      { id: 1, title: 'Movie 1', overview: 'Overview 1' },
      { id: 2, title: 'Movie 2', overview: 'Overview 2' },
    ];
    mockGetMovies.mockResolvedValueOnce({ movies: mockMovies, metaData: { pagination: { currentPage: 1, totalPages: 3 } } });

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Movie 1')).toBeInTheDocument();
      expect(screen.getByText('Movie 2')).toBeInTheDocument();
    });
  });

  test('debe mostrar un mensaje de error cuando falla la API', async () => {
    mockGetMovies.mockRejectedValueOnce(new Error('API error'));

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Something went wrong while fetching movies.')).toBeInTheDocument();
    });
  });

  test('debe manejar la paginación correctamente', async () => {
    const mockMoviesPage1 = [
      { id: 1, title: 'Movie 1', overview: 'Overview 1' },
      { id: 2, title: 'Movie 2', overview: 'Overview 2' },
    ];
    const mockMoviesPage2 = [
      { id: 3, title: 'Movie 3', overview: 'Overview 3' },
      { id: 4, title: 'Movie 4', overview: 'Overview 4' },
    ];
    mockGetMovies
      .mockResolvedValueOnce({ movies: mockMoviesPage1, metaData: { pagination: { currentPage: 1, totalPages: 3 } } })
      .mockResolvedValueOnce({ movies: mockMoviesPage2, metaData: { pagination: { currentPage: 2, totalPages: 3 } } });

    render(
      <MemoryRouter initialEntries={['/home?page=1']}>
        <Home />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Movie 1')).toBeInTheDocument();
      expect(screen.getByText('Movie 2')).toBeInTheDocument();
    });

    // Simular un cambio de página
    fireEvent.click(screen.getByText('2')); // Asume que el botón de paginación tiene el texto '2'
    
    await waitFor(() => {
      expect(screen.getByText('Movie 3')).toBeInTheDocument();
      expect(screen.getByText('Movie 4')).toBeInTheDocument();
    });
  });
});
