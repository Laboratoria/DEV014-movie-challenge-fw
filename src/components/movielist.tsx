// src/components/MovieList.tsx

import React, { useEffect, useState } from 'react';
import { formatMovie } from '../utils/transformers';
import  ApiMovie  from '../models/ApiMovieList';
import Movie from '../models/Movie';
import { getMovies } from '../services/APIService';

//React.FC funcional componente
const MovieList: React.FC = () => {
  //movies array objeto de Movie, movies es el valor actual del estado.
  // setMovies es la función para actualizar este estado.
  //permite agregar estado local a componentes funcionales.
  //<Movie[]> especifica que el estado será un array de objetos Movie.
  //[]carguen los datos de las películas, movies

  //variables cambian de estado
  //setMovies modifica la variable movies
  //movies cambia, porque va a buscar a fuera la informacion
  //funciones reactivas
  const [movies, setMovies] = useState<Movie[]>([]);


  //detecta cambios
  useEffect(() => {


      //cuando no hay dependencias, se ejecutara una sola vez en el inicio
  }, []);

  //ejecuta funcion
  //

  return (
    <div>
      <h1>Movie List</h1>
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

export default MovieList;
