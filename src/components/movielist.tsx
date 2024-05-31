// src/components/MovieList.tsx

import React, { useEffect, useState } from 'react';
import { formatMovie } from '../utils/transformers';
import  ApiMovie  from '../models/ApiMovieList';
import Movie from '../models/Movie';

//React.FC funcional componente
const MovieList: React.FC = () => {
  //movies array objeto de Movie, movies es el valor actual del estado.
  // setMovies es la función para actualizar este estado.
  //permite agregar estado local a componentes funcionales.
  //<Movie[]> especifica que el estado será un array de objetos Movie.
  //[]carguen los datos de las películas, movies
  const [movies, setMovies] = useState<Movie[]>([]);

  //manejador de solicitud de redx
  useEffect(() => {
    fetch('https://api.example.com/movies')
      .then(response => response.json())
      //transforma cada objeto de datos de la API usando formatMovie.
      .then((data: ApiMovie[]) => {
        const formattedMovies = data.map(apiMovie => formatMovie(apiMovie));
        //actualiza el estado movies con los datos transformados.
        setMovies(formattedMovies);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }, []);

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
