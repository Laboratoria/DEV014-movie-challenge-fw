import { APIService } from "./APIService";
import { Movie } from "../models/Movie";


describe("APIService", () => {
it("Debería comunicarse exitosamente con la API", async  () => {
const movieList: Movie[] = await new APIService().getMovies();

 });
});
