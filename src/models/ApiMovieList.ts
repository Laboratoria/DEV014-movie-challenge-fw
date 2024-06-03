import ApiMovieResult from "./ApiMovieResult";

//todos los elementos de la api deben ir aqui
//elementos que la API me entrega
interface ApiMovieList {
  page: number;
  results: ApiMovieResult[];
  total_pages: number;
  total_results: number;
}
export default ApiMovieList;
