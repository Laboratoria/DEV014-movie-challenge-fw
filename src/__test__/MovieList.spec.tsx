import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MovieList from '../components/MovieList';
import Movie from '../models/Movie';

const mockMovieList: Movie[] = [
        {
    adult: false,
    backdrop_path: "/tkHQ7tnYYUEnqlrKuhufIsSVToU.jpg",
    genre_ids: [27],
    id: 437342,
    original_language: "en",
    original_title: "The First Omen",
    overview:
      "When a young American woman is sent to Rome to begin a life of service to the church, she encounters a darkness that causes her to question her own faith and uncovers a terrifying conspiracy that hopes to bring about the birth of evil incarnate.",
    popularity: 2029.625,
    poster_path: "/uGyiewQnDHPuiHN9V4k2t9QBPnh.jpg",
    release_date: "2024-04-03",
    title: "The First Omen",
    video: false,
    vote_average: 6.8,
    vote_count: 325,
  },
  {
    adult: false,
    backdrop_path: "/H5HjE7Xb9N09rbWn1zBfxgI8uz.jpg",
    genre_ids: [28, 35, 80, 9648, 10749],
    id: 746036,
    original_language: "en",
    original_title: "The Fall Guy",
    overview:
      "Fresh off an almost career-ending accident, stuntman Colt Seavers has to track down a missing movie star, solve a conspiracy and try to win back the love of his life while still doing his day job.",
    popularity: 1873.501,
    poster_path: "/tSz1qsmSJon0rqjHBxXZmrotuse.jpg",
    release_date: "2024-04-24",
    title: "The Fall Guy",
    video: false,
    vote_average: 7.316,
    vote_count: 954,
  },
  {
    adult: false,
    backdrop_path: "/fY3lD0jM5AoHJMunjGWqJ0hRteI.jpg",
    genre_ids: [878, 27, 28],
    id: 940721,
    original_language: "ja",
    original_title: "ゴジラ-1.0",
    overview:
      "In postwar Japan, Godzilla brings new devastation to an already scorched landscape. With no military intervention or government help in sight, the survivors must join together in the face of despair and fight back against an unrelenting horror.",
    popularity: 1408.634,
    poster_path: "/hkxxMIGaiCTmrEArK7J56JTKUlB.jpg",
    release_date: "2023-11-03",
    title: "Godzilla Minus One",
    video: false,
    vote_average: 7.7,
    vote_count: 1355,
  },
]

it('should render movie titles correctly', () => {
    render(<MovieList movies={mockMovieList} />);
    mockMovieList.forEach(movie => {
      expect(screen.getByText(movie.original_title)).toBeInTheDocument();
    });
  });
  it('should render movie release dates correctly', () => {
    render(<MovieList movies={mockMovieList} />);
    mockMovieList.forEach(movie => {
      expect(screen.getByText(movie.release_date)).toBeInTheDocument();
    });
  });

  it('should render movie overviews correctly', () => {
    render(<MovieList movies={mockMovieList} />);
    mockMovieList.forEach(movie => {
      expect(screen.getByText(movie.overview)).toBeInTheDocument();
    });
  });