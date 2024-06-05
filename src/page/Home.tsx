// src/App.tsx
//define peliculas y pasa a componentes.

import React, { useEffect, useState } from "react";
import "../styles/HomePage.css";
import { getMovies } from "../services/APIService";
import Movie from "../models/Movie";
import MovieList from "../components/MovieList";

//app es un componente de tipo funcion de reactx
const Home: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getMovies().then((movies: Movie[]) => {
      setMovies(movies);
    });
  }, []);
  return (
    <div>
      <h1>Cinema Paraíso</h1>
   {/* {movies} son las peliculas */}
      <MovieList movies={movies}/>
    </div>
  );
};

export default Home;
