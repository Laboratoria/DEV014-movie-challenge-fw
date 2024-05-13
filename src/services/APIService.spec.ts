// import { APIService } from "./APIService";
import { Movie } from "../models/Movie";
// import dotenv from 'dotenv';
// dotenv.config();
global.fetch = () =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          title: "titanic",
          year: "2022",
          overview: "titanic description",
        },
      ]),
  });

// describe("APIService", () => {
//   it("Debería comunicarse exitosamente con la API", async  () => {
//      const movieList: Movie[] = await new APIService().getMovies();

//   });
// });
