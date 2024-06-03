import '@testing-library/jest-dom';  
import { render, waitFor, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MovieDetail } from "./MovieDetail";
import { getMovieDetail } from "../services/movieService";

jest.mock("../services/movieService", () => ({
  getMovieDetail: jest.fn(),
}));

describe("MovieDetail", () => {
  const mockMovie = {
    id: 1,
    title: "The Movie",
    year: "2022",
    genres: ["Action", "Adventure"],
    overview: "This is a movie overview",
    rating: 8.5,
    poster: "/poster.jpg",
  };

  beforeEach(() => {
    (getMovieDetail as jest.Mock).mockResolvedValue(mockMovie);
  });

  it("should render movie details correctly when loaded successfully", async () => {
    render(
      <MemoryRouter initialEntries={["/movie/1"]} initialIndex={0}>
        <MovieDetail />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("The Movie")).toBeInTheDocument();
      expect(screen.getByText("Fecha de lanzamiento: 2022")).toBeInTheDocument();
      expect(screen.getByText("ActionAdventure")).toBeInTheDocument();
      expect(screen.getByText("This is a movie overview")).toBeInTheDocument();
      expect(screen.getByText("Rating: 8.5")).toBeInTheDocument();
    });
  });
});
