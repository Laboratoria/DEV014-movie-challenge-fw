import { useState, useEffect} from "react";
import { useSearchParams } from 'react-router-dom';
import { MovieList } from "./MovieList";
import { APIService } from "../services/APIService";
import { Movie } from "../models/Movie";
import { Pagination } from "./Pagination";

function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [searchParams, setSearchParams] = useSearchParams({currentPage:  "1" });
  useEffect(() => {
    fetchData(Number (searchParams.get('currentPage')));
    // setSearchParams ({currentPage:  "1"})
  }, [searchParams]);

  const fetchData = async (page: number) => {
    setIsLoading(true);
    try {
      const movieList: Movie[] = (await new APIService().getMovies({page: page })).movies;
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
    </div>
  );
}

export default Home;
