import "@testing-library/jest-dom";
import { render, act } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { MovieDetailView } from "../views/MovieDetailView";

const movieMock = {
  id: 1189205,
  title: "Blood and Snow",
  poster: "/dLb9NTP9myZfS1hTf1TOso9gyNI.jpg",
  releseaDate: 2023,
  genres: [
    { id: 878, value: "878", text: "Science Fiction" },
    { id: 27, value: "27", text: "Horror" },
  ],
  description: "Scientists find meteor in Arctic",
  backgroundWallpaper: "/xp3FD8TiDuU35kGySvmFtCi6xZy.jpg",
};

jest.mock("../services/constants", () => ({ ApiKey: "mocked-token" }));
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // use actual for all non-hook parts
  useParams: () => ({
    id: "1",
  }),
}));

describe("MovieDetailView", () => {
  it("Se deberia visualizar la informacion de cada pelicula una vez cargada", async () => {
    global.fetch = jest.fn().mockResolvedValue(movieMock);

    await act(async () => {
      const {} = render(
        <Router>
          <MovieDetailView />
        </Router>
      );
    });
  });
});
