import { useState, useEffect} from "react";
import { useSearchParams } from 'react-router-dom';
import { MovieList } from "./MovieList";
import { APIService } from "../services/APIService";
import { Movie } from "../models/Movie";
import { Pagination } from "./Pagination";
import { formatGenresToMap, formatGenresToOptions } from "../utils/transformers";
import { getMovieGenres } from "./../services/movieService";
import { ListOptions } from "./ListOptions";

function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [searchParams, setSearchParams] = useSearchParams({currentPage:  "1" });
 const [select, setSelect]= useState<{value: string; label: string}[]>([])
  useEffect(() => {
     getMovieGenres().then((genres)=>{
      setSelect(formatGenresToOptions(genres))
     }).catch(()=>{})
  },[])
  useEffect(() => {
    fetchData(Number (searchParams.get('currentPage')));
    // setSearchParams ({currentPage:  "1"})
  }, [searchParams]);

  const fetchData = async (page: number) => {
    setIsLoading(true);
    try {
      const movieGenres = await getMovieGenres()
      const movieList: Movie[] = (await new APIService().getMovies({page: page, genreId: null, sortBy: null}, formatGenresToMap(movieGenres))).movies;
      setMovies(movieList);
      setIsLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      } else {
        setError(new Error("An unknown error occurred."));
      }
      setIsLoading(false);
    }
  };

  const onSelectedPage = (page) => {
    setSearchParams({currentPage: page });
  };
  return (
    <div>
      {isLoading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <MovieList movielist={movies} />
      )}

      <Pagination
        currentPage={Number (searchParams.get('currentPage'))}
        totalPages={20}
        onSelectPage={onSelectedPage}
      />
      <ListOptions options={select} selectedOption={{value: "hola", label: "por"}} onChange= {()=>{}} onClear= {()=>{}} ></ListOptions>
    </div>
  );
}

export default Home;
