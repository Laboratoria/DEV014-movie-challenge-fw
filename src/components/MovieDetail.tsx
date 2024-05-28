import "./MovieDetail.css"
import { Movie } from "../models/Movie";
import  { useState, useEffect } from "react";
import { getMovieDetail } from "../services/movieService";
type moviedetailprops = {
  movie: Movie;
};


export function MovieDetail() {
  const [movie, setMovie] = useState<Movie>(null);

    useEffect(() =>{
        getMovieDetail(823464).then((movie)=>{
        setMovie(movie)
        }).catch((error)=>{
         throw error
        })
        
     
     },[])
    return (
        <div className="containerMovieDetail">
          <div className="containerMovieDetailLeft" >
            <button className="backButton"> atras </button>
          <img className="imgMovieDetail" src={movie ? "https://image.tmdb.org/t/p/w500/"+movie?.poster : ""}></img>
          </div>
          <div className="containerMovieDetailRight">
          <h3 className="titleMovieDetail">{movie?.title || ""}</h3>
          <p className="yearMovieDetail">{"Fecha de lanzamiento: " + movie?.year || ""}</p>
          <p className="genreMovieDetail">{movie?.genres || ""}</p>
          <p className="overviewMovieDetail">{movie?.overview || ""}</p>
          <p className="ratingMovieDetail">{"Rating:  "+movie?.rating || ""}</p>
          </div>
        </div>
      );
}
