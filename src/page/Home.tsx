// src/App.tsx
//define peliculas y pasa a componentes.

import React, { useEffect, useState } from "react";

import { getMovies } from "../services/APIService";
import Movie from "../models/Movie";

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
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <h2>{movie.original_title}</h2>
            <p>{movie.overview}</p>
            <img src={movie.poster_path} alt={movie.original_title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
