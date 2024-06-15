import "./MovieDetail.css";
import { Movie } from "../models/Movie";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieDetail } from "../services/movieService";
import ReactLoading from "react-loading";

export function MovieDetail() {
  const navigate = useNavigate();
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [movie, setMovie] = useState<Movie>(null);
  const { id } = useParams();
  useEffect(() => {
    setIsLoading(true);
    getMovieDetail(Number(id))
      .then((movie) => {
        setMovie(movie);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error("An unknown error occurred."));
        }
        setIsLoading(false);
      });
  }, []);
  return (
    <div>
      {isLoading ? (
        <div className="reactLoading">
          {" "}
          <ReactLoading
            type={"cylon"}
            color={"#EAB108"}
            height={500}
            width={600}
          />{" "}
        </div>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div className="containerMovieDetail">
          <div className="containerMovieDetailLeft">
            <button onClick={()=>{navigate(-1)}} className="backButton"> atras </button>
            <img
              className="imgMovieDetail"
              src={
                movie ? "https://image.tmdb.org/t/p/w500/" + movie?.poster : ""
              }
            ></img>
          </div>
          <div className="containerMovieDetailRight">
            <h3 className="titleMovieDetail">{movie?.title || ""}</h3>
            <p className="yearMovieDetail">
              {"Fecha de lanzamiento: " + movie?.year || ""}
            </p>
            <p className="genreMovieDetail">{movie?.genres || ""}</p>
            <p className="overviewMovieDetail">{movie?.overview || ""}</p>
            <p className="ratingMovieDetail">
              {"Rating:  " + movie?.rating || ""}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
