import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MovieListComponent } from "../components/movie/MovieListComponent";
import { Movie } from "../models/Movie";

import "@testing-library/jest-dom/jest-globals";
import "@testing-library/jest-dom";

jest.mock("../services/constants", () => ({ ApiKey: "mocked-token" }));

describe("Retorna una lista de peliculas de manera correcta", () => {
  it("Se comprueba que los elementos de tipo Movie se muestren correctamente", () => {
    const movies: Movie[] = [
      {
        id: 653346,
        title: "Kingdom of the Planet of the Apes",
        poster: "/gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
        releseaDate: 2021,
      },
      {
        id: 929590,
        title: "Civil War",
        poster: "/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg",
        releseaDate: 2022,
      },
      {
        id: 823464,
        title: "Godzilla x Kong: The New Empire",
        poster: "/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg",
        releseaDate: 2023,
      },
    ];
    const { getByText } = render(
      <MemoryRouter>
        <MovieListComponent movies={movies} />
      </MemoryRouter>
    );

    let titleElement = getByText("Kingdom of the Planet of the Apes");
    expect(titleElement).toBeInTheDocument();

    let yearElement = getByText("2021");
    expect(yearElement).toBeInTheDocument();

    titleElement = getByText("Civil War");
    expect(titleElement).toBeInTheDocument();

    yearElement = getByText("2022");
    expect(yearElement).toBeInTheDocument();

    titleElement = getByText("Godzilla x Kong: The New Empire");
    expect(titleElement).toBeInTheDocument();

    yearElement = getByText("2023");
    expect(yearElement).toBeInTheDocument();
  });
});
