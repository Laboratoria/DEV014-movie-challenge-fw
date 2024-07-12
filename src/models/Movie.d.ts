//interfaces ;
//type , -- como si fuera objeto de JS
export interface Movie {
  id: number;
  title: string;
  poster: string;
  releseaDate: number;
}

export interface MovieDetails extends Movie {
  genres: Genre[];
  description: string;
  backgroundWallpaper: string;
}

export interface MovieResponse {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieDetailsResponse {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: Collection;
  budget: number;
  //arrey //lista de generos
  genres: GenreResponse[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Company[];
  production_countries: Country[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Languages[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export type Collection = {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
};

export type GenreResponse = {
  id: number;
  name: string;
};

export type Genre = {
  id: number;
  value: string;
  text: string;
};

export type Company = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

export type Country = {
  iso_3166_1: string;
  name: string;
};

export type Language = {
  english_name: string;
  iso_639_1: string;
  name: string;
};
