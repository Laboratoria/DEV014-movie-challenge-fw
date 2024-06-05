import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import MovieCard from "../components/MovieCard"; // Ajusta la ruta según la ubicación de tu archivo

const mockMovieCard = {
  adult: false,
  backdrop_path: "/backdrop.jpg",
  genre_ids: [1, 2, 3],
  id: 123,
  original_language: "en",
  original_title: "Test Movie",
  overview: "This is a test movie",
  popularity: 123.45,
  poster_path: "/poster.jpg",
  release_date: "2023-01-01",
  title: "Test Movie",
  video: false,
  vote_average: 4.5,
  vote_count: 100,
};
test("MovieCard renders movie title and release date", () => {
  render(<MovieCard movie={mockMovieCard} />);
  //screen ofrece un conjunto de métodos que te permiten buscar elementos específicos dentro del componente renderizado. 
expect(screen.getByText(mockMovieCard.original_title)).toBeInTheDocument();
expect(screen.getByText(mockMovieCard.release_date)).toBeInTheDocument();
});

