import { getMovieDetail } from "./movieService";
import { Movie } from "../models/Movie";

jest.mock("../constans.ts", () => ({ token: "mocked-token" }));

describe("getMovieDetail", () => {
  it("Debería obtener detalles de la película correctamente", async () => {
    global.fetch = jest
      .fn()
      .mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce({
          id: 123,
          title: "Test Movie",
          poster_path: "test-poster-url.jpg",
          release_date: "2022-01-01",
          overview: "descripcion de prueba",
          vote_average: 7,
          genre_ids: [1, 2],
        }),
      })
      .mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce({
          genres: [
            { id: 1, name: "Action" },
            { id: 2, name: "Adventure" },
          ],
        }),
      });

    const movie: Movie = await getMovieDetail(123);

    expect(fetch).toHaveBeenCalledWith(
      "https://api.themoviedb.org/3/movie/123",
      expect.any(Object)
    );
    expect(fetch).toHaveBeenCalledWith(
      "https://api.themoviedb.org/3/genre/movie/list?language=en",
      expect.any(Object)
    );

    const expectedMovie: Movie = {
      id: 123,
      title: "Test Movie",
      poster: "test-poster-url.jpg",
      year: "2022-01-01",
      overview: "descripcion de prueba",
      rating: 7,
      genres: ["Action", "Adventure"],
    };

    expect(movie).toEqual(expectedMovie);
  });

  it("Debería manejar errores al obtener detalles de la película", async () => {
    global.fetch = jest
      .fn()
      .mockRejectedValueOnce(new Error("API Error"));

    await expect(getMovieDetail(123)).rejects.toThrow("API Error");
  });
});

