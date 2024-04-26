import { Movie } from "../models/Movie";

export function formatMovie(apiMovieData: any): Movie {
    return {
        title: apiMovieData.title,
        poster: apiMovieData.poster_path,
        year: apiMovieData.release_date,
        overview: apiMovieData.overview,
        rating: apiMovieData.vote_average
    };
}