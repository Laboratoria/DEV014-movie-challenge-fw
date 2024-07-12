import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getMovieDetail,
  image500SrcUrl,
  imageOriginalSrcUrl,
} from "../services/APIService";
import { MovieDetails } from "../models/Movie";
import { Loader } from "../components/Loader";

export function MovieDetailView() {
  const [movie, setMovie] = useState<MovieDetails>({
    id: 0,
    title: "",
    poster: "",
    releseaDate: 0,
    genres: [],
    description: "",
    backgroundWallpaper: "",
  });
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams();

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  const fetchMovieDetails = async () => {
    try {
      setLoading(true);

      const response = await getMovieDetail(id || "");

      setMovie(response);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
    }
  };

  const renderGenres = () => {
    if (movie.genres) {
      return movie.genres.map((genre) => (
        <li
          key={genre.id}
          data-testid={"movie-genre-" + genre.id}
          className="movie-detail-genre"
        >
          {genre.text}
        </li>
      ));
    }
  };

  return (
    <div className="movie-detail">
      {loading ? (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Loader />
        </div>
      ) : (
        <>
          <img
            className="movie-detail-wallpaper-image"
            src={imageOriginalSrcUrl + movie.backgroundWallpaper}
          />
          <div className="movie-detail-information">
            <div className="movie-detail-information-container">
              <h1 data-testid="movie-title">{movie.title}</h1>
              <ul>{renderGenres()}</ul>
              <p data-testid="movie-release-date">
                {" "}
                Relesea date : {movie.releseaDate}
              </p>
              <p data-testid="movie-description">{movie.description}</p>
            </div>
            <div className="movie-detail-poster-container">
              <div>
                <img
                  data-testid="movie-poster"
                  className="movie-detail-poster"
                  src={image500SrcUrl + movie.poster}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
