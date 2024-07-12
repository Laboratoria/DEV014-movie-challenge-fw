import { getMovies } from "../services/APIService";

jest.mock("../services/constants", () => ({ ApiKey: "mocked-token" }));

describe("API Service test", () => {
  it("Se comunica exitosamente con la API usando getMovies", async () => {
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        json: () =>
          Promise.resolve({
            page: 1,
            results: [
              {
                adult: false,
                backdrop_path: "/uVu2fBc114un7F1GD76RBouWyBP.jpg",
                genre_ids: [16, 10751, 18, 12, 35],
                id: 1022789,
                original_language: "en",
                original_title: "Inside Out 2",
                overview:
                  "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.",
                popularity: 1350.605,
                poster_path: "/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
                release_date: "2024-06-12",
                title: "Inside Out 2",
                video: false,
                vote_average: 8.2,
                vote_count: 19,
              },
              {
                adult: false,
                backdrop_path: "/z121dSTR7PY9KxKuvwiIFSYW8cf.jpg",
                genre_ids: [10752, 28, 18],
                id: 929590,
                original_language: "en",
                original_title: "Civil War",
                overview:
                  "In the near future, a group of war journalists attempt to survive while reporting the truth as the United States stands on the brink of civil war.",
                popularity: 2730.901,
                poster_path: "/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg",
                release_date: "2024-04-10",
                title: "Civil War",
                video: false,
                vote_average: 7.047,
                vote_count: 1420,
              },
            ],
          }),
      });
    });

    //Recibe un objeto como parametro, y se les asigna un valor por defecto
    const movies = await getMovies({
      filters: { page: 1, genre: "-", year: "-", sortBy: "-" },
    });

    const moviesExpected = [
      {
        id: 1022789,
        title: "Inside Out 2",
        releseaDate: 2024,
        poster: "/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
      },
      {
        id: 929590,
        title: "Civil War",
        releseaDate: 2024,
        poster: "/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg",
      },
    ];

    expect(movies.movies).toEqual(moviesExpected);
  });

  it("Debería manejar una respuesta fallida de la API", async () => {
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        json: () =>
          Promise.resolve({
            status_code: 404,
            status_message: "Invalid API key: You must be granted a valid key.",
            success: false,
          }),
      });
    });

    try {
      await getMovies({
        filters: { page: 1, genre: "-", year: "-", sortBy: "-" },
      });
      fail("La respuesta fue exitosa pero debió ser errónea");
    } catch (error) {}
  });
});
