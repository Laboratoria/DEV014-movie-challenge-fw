import { getMovieGenres } from "../services/MovieService";
import { formatGenre } from "../utils/transformers";

const genreListMock = [
  { id: 1, name: "Action" },
  { id: 2, name: "Adventure" },
];

jest.mock("../services/constants", () => ({ ApiKey: "mocked-token" }));

describe("getMovieGenres", () => {
  it("Debería obtener los géneros de las películas correctamente", async () => {
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        json: jest.fn().mockImplementation(() => {
          return Promise.resolve({
            genres: genreListMock,
          });
        }),
      });
    });

    const genres = await getMovieGenres();

    expect(genres).toEqual(genreListMock.map((genre) => formatGenre(genre)));
  });

  it("Debería manejar errores al obtener detalles de la película", async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error("Async error"));

    await expect(getMovieGenres()).rejects.toThrow("Async error");
  });
});
