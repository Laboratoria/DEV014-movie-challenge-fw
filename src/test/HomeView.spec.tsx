import { render, act } from "@testing-library/react";
import { HomeView } from "../views/HomeView";
import { Movie } from "../models/Movie";
import { MemoryRouter } from "react-router";

jest.mock("../services/constants", () => ({ ApiKey: "mocked-token" }));

const movieListMock = {
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
};

describe("Test HomeView", () => {
  it("Muestra las peliculas correspondientes", async () => {
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        json: jest.fn().mockImplementation(() => {
          return Promise.resolve(movieListMock);
        }),
      });
    });

    await act(async () => {
      const { getByText } = render(
        <MemoryRouter>
          <HomeView />
        </MemoryRouter>
      );
      // El loading se visualiza en la pagina
      /*expect(screen.getByText("loader")).toBeGreaterThan(0);

      // Esperar a que el loading desaparezca
      await waitFor(() => {
        expect(screen.queryByText("loader")).toBeNull();
      });*/
      //expect(screen.getByTestId("loader"));

      const [firstMovie, secondMovie]: Movie[] = [
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

      setTimeout(() => {
        expect(getByText(firstMovie.title)).toBeTruthy();
        expect(getByText(firstMovie.releseaDate)).toBeTruthy();
        expect(getByText(firstMovie.poster)).toBeTruthy();

        expect(getByText(secondMovie.title)).toBeTruthy();
        expect(getByText(secondMovie.releseaDate)).toBeTruthy();
        expect(getByText(secondMovie.poster)).toBeTruthy();
      }, 1000);
    });
  });
});
