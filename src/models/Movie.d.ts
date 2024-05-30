//declara interfaz movie
interface Movie {
    id: number;
    original_title: string;
    release_date: string;
    genre_ids: number[];
    overview: string;
    vote_average: number;
    poster_path: string;
  }
  
  export default Movie;