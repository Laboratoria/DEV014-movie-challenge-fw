import { Movie } from "../models/Movie";
import { MemoryRouter } from "react-router-dom";
import { MovieCardComponent } from "../components/movie/MovieCardComponent";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/jest-globals";
import "@testing-library/jest-dom";

jest.mock("../services/constants", () => ({ ApiKey: "mocked-token" }));

describe("MovieCard funciona de manera correcta", () => {
  it("El titulo y el año se visualiza correctamente", () => {
    const movie: Movie = {
      id: 490132,
      title: "Green Book",
      poster: "/7BsvSuDQuoqhWmU2fL7W2GOcZHU.jpg",
      releseaDate: 2018,
    };

    const { getByText } = render(
      <MemoryRouter>
        <MovieCardComponent movie={movie} />
      </MemoryRouter>
    );

    const titleElement = getByText("Green Book");
    expect(titleElement).toBeInTheDocument();

    const yearElement = getByText("2018");
    expect(yearElement).toBeInTheDocument();
  });
});
