import  { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { MovieList } from "./MovieList";
import { APIService } from "../services/APIService";
import { Movie } from "../models/Movie";
import { Pagination } from "./Pagination";
import ReactLoading from "react-loading";

import {
  formatGenresToMap,
  formatGenresToOptions,
} from "../utils/transformers";
import { getMovieGenres } from "./../services/movieService";
import {ListOptions} from "./ListOptions";
interface Option {
  value: string;
  label: string;
}

function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [searchParams, setSearchParams] = useSearchParams({ currentPage: "1" });
  const [select, setSelect] = useState<Option[]>([]);
  const [sortBy, setSortBy] = useState<Option | null>(null);
  const [selectValue, setSelectValue] = useState<Option | null>(null);

  const sortByOptions: Option[] = [
    { value: 'original_title.asc', label: 'Original Title Ascending' },
    { value: 'original_title.desc', label: 'Original Title Descending' },
    { value: 'popularity.asc', label: 'Popularity Ascending' },
    { value: 'popularity.desc', label: 'Popularity Descending' },
    { value: 'revenue.asc', label: 'Revenue Ascending' },
    { value: 'revenue.desc', label: 'Revenue Descending' },
    { value: 'primary_release_date.asc', label: 'Release Date Ascending' },
    { value: 'primary_release_date.desc', label: 'Release Date Descending' },
    { value: 'title.asc', label: 'Title Ascending' },
    { value: 'title.desc', label: 'Title Descending' },
    { value: 'vote_average.asc', label: 'Vote Average Ascending' },
    { value: 'vote_average.desc', label: 'Vote Average Descending' },
    { value: 'vote_count.asc', label: 'Vote Count Ascending' },
    { value: 'vote_count.desc', label: 'Vote Count Descending' },
  ];

  useEffect(() => {
    getMovieGenres()
      .then((genres) => {
        setSelect([{value: null, label: "filter by"}, ...formatGenresToOptions(genres)]);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    fetchData(Number(searchParams.get("currentPage")));
  }, [searchParams, selectValue, sortBy]);

  const fetchData = async (page: number) => {
    setIsLoading(true);
    try {
      const movieGenres = await getMovieGenres();
      const movieList: Movie[] = (
       
        await new APIService().getMovies(
          {
            page: page,
            genreId: Number(selectValue?.value),
            sortBy: sortBy?.value,
          },
          formatGenresToMap(movieGenres)
        )
      ).movies;
      setMovies(movieList);
      setIsLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      } else {
        setError(new Error("An unknown error occurred."));
      }
      setIsLoading(false);
    }
  };

  const onSelectedPage = (page: number) => {
    setSearchParams({ currentPage: page.toString() });
  };

  return (
    <div>
      <ListOptions
        options={select}
        selectedOption={selectValue}
        onChange={(selectedOption) => {
          setSelectValue(selectedOption);
        }}
        onClear={() => setSelectValue(null)}
      /> 

      <ListOptions
        options={sortByOptions}
        selectedOption={sortBy}
        onChange={(selectedOption) => {
          setSortBy(selectedOption);
        }}
        onClear={() => setSortBy(null)}
      />
      {isLoading ? (
        <div className="reactLoading"> <ReactLoading
        type={"cylon"}
        color={"#EAB108"}
        height={500}
        width={600}
      /> </div>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <MovieList movielist={movies} />
      )}
      <Pagination
        currentPage={Number(searchParams.get("currentPage"))}
        totalPages={20}
        onSelectPage={onSelectedPage}
      />
    </div>
  );
}

export default Home;
