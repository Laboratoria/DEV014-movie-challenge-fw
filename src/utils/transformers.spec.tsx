import { formatMovie } from "./transformers";
import { Movie } from "../models/Movie";

describe("formatMovie function", () => {
  it("Debería convertir correctamente los datos de la película desde la API", () => {
    const apiMovieData = {
      id: 222,
      title: "No Way Up",
      poster_path: "/hu40Uxp9WtpL34jv3zyWLb5zEVY.jpg",
      release_date: "2024-01-18",
      overview:
        "Characters from different backgrounds are thrown together when the plane they're travelling on crashes into the Pacific Ocean. A nightmare fight for survival ensues with the air supply running out and dangers creeping in from all sides.",
      vote_average: 6.344,
      genre_ids: [222],
    };

    const expectedMovie: Movie = {
      id: 222,
      title: "No Way Up",
      poster: "/hu40Uxp9WtpL34jv3zyWLb5zEVY.jpg",
      year: "2024-01-18",
      overview:
        "Characters from different backgrounds are thrown together when the plane they're travelling on crashes into the Pacific Ocean. A nightmare fight for survival ensues with the air supply running out and dangers creeping in from all sides.",
      rating: 6.344,
      genres: ["accion"],
    };

    const convertMovieData = formatMovie(
      apiMovieData,
      new Map([[222, "accion"]])
    );

    expect(convertMovieData).toEqual(expectedMovie);
  });
});
