import { render } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import { MovieList } from "./MovieList";
import { Movie } from "../models/Movie";
import "@testing-library/jest-dom/jest-globals";
import "@testing-library/jest-dom";

describe("Debe retornar una lista de peliculas correctamente", () => {
  it("se comprueba que los titulos y los años esten correctamente", () => {
    const movies: Movie[] = [
      //movies es una lista con el type movie
      {
        id: 111,
        title: "titanic",
        year: "2022",
        poster: "test-poster-url.jpg",
        genres: ["accion", "aventura"]
      },
      {
        id: 222,
        title: "Peligro en la montaña",
        year: "2018",
        poster: "test1-poster-url.jpg",
        genres: ["ciencia ficcion", "animacion"]
      },
      {
        id: 333,
        title: "Amélie",
        year: "2001",
        poster: "test2-poster-url.jpg",
        genres: ["ciencia ficcion", "animacion"]
      },
      {
        id: 444,
        title: "Your name",
        year: "2016",
        poster: "test3-poster-url.jpg",
        genres: ["ciencia ficcion", "animacion"]
      },
    ];
    const { getByText } = render(
      <Router> 
          <MovieList movielist={movies}/>
      </Router>
  );

    let titleElement = getByText("titanic");
    expect(titleElement).toBeInTheDocument();

    let yearElement = getByText("2022");
    expect(yearElement).toBeInTheDocument();

    titleElement = getByText("Peligro en la montaña");
    expect(titleElement).toBeInTheDocument();

    yearElement = getByText("2018");
    expect(yearElement).toBeInTheDocument();

    titleElement = getByText("Amélie");
    expect(titleElement).toBeInTheDocument();

    yearElement = getByText("2001");
    expect(yearElement).toBeInTheDocument();

    titleElement = getByText("Your name");
    expect(titleElement).toBeInTheDocument();

    yearElement = getByText("2016");
    expect(yearElement).toBeInTheDocument();
  });
});
