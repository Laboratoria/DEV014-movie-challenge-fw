import { useState, useEffect } from "react";
import { MovieList } from "./MovieList";
import { APIService } from "../services/APIService";
import { Movie } from "../models/Movie";

function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const movieList: Movie[] = (await new APIService().getMovies()).movies;
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

  return (
    <div>
      {isLoading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <MovieList movielist={movies} />
      )}
    </div>
  );
}

export default Home;
