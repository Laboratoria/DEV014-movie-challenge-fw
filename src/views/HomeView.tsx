import { useState, useEffect, ChangeEvent } from "react";
import { getMovies } from "../services/APIService";
import { Genre, Movie } from "../models/Movie";
import { MovieListComponent } from "../components/movie/MovieListComponent";
import { Loader } from "../components/Loader";
import Pagination from "../components/Pagination";
import { getMovieGenres } from "../services/MovieService";
import { Navigation } from "../components/Navigation";
import { useSearchParams } from "react-router-dom";

export function HomeView() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [movies, setMovies] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<string>(
    searchParams.get("genreId") || "-"
  );
  const [selectedYear, setSelectedYear] = useState<string>(
    searchParams.get("year") || "-"
  );
  const [sortBy, setSortBy] = useState<string>(
    searchParams.get("sortBy") || "-"
  );

  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(
    parseInt(searchParams.get("page") as any) || 1
  );
  const [totalPages, setTotalPages] = useState<number>(1);

  const years = Array.from({ length: 30 }, (_, i) => 2024 - i);

  useEffect(() => {
    const fetchData = async () => {
      await fetchMovies();
      await fetchGenres();
      setTimeout(() => {
        setLoading(false);
      }, 400);
    };

    setLoading(true);
    fetchData();
  }, []);

  //cada que una variable cambie su valor, se ejecuta el useEffect
  //Arrey de dependencias = currentPage
  useEffect(() => {
    const fetchData = async () => {
      await fetchMovies();
      setTimeout(() => {
        setLoading(false);
      }, 400);
    };

    setLoading(true);
    fetchData();
  }, [currentPage, selectedGenre, selectedYear, sortBy]);

  const fetchMovies = async () => {
    try {
      const response = await getMovies({
        filters: {
          page: currentPage,
          genre: selectedGenre.toString(),
          year: selectedYear,
          sortBy: sortBy,
        },
      });
      setMovies(response.movies);

      setTotalPages(Math.min(response.metaData.pagination.totalPages, 20));
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const fetchGenres = async () => {
    try {
      const genreList = await getMovieGenres();
      setGenres(genreList);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    if (page > 1) {
      searchParams.set("page", page.toString());
    } else {
      searchParams.delete("page");
    }

    setSearchParams(searchParams);
  };

  const handleGenreChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const genreValue = event.target.value;
    setSelectedGenre(genreValue);

    searchParams.set("genreId", genreValue);
    setSearchParams(searchParams);
  };

  const handleYearChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const yearValue = event.target.value;
    setSelectedYear(yearValue);

    searchParams.set("year", yearValue);
    setSearchParams(searchParams);
  };

  const handleSortByChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const sortByValue = event.target.value;
    setSortBy(sortByValue);

    searchParams.set("sort_by", sortByValue);
    setSearchParams(searchParams);
  };

  //Separar en dos funciones
  const handleOnClear = (param: string) => {
    switch (param) {
      case "year":
        setSelectedYear("-");
        searchParams.delete("year");
        break;
      case "genre":
        setSelectedGenre("-");
        searchParams.delete("genreId");
        break;
      case "sortBy":
        setSortBy("-");
        searchParams.delete("sort_by");
        break;
      default:
    }

    setSearchParams(searchParams);
  };
  //condicional rendering --- loading ?(condicional ternario)
  //Parecido a un if else
  return (
    <div className="background-container">
      <Navigation
        genreOptions={genres}
        yearOptions={years}
        selectedGenre={selectedGenre}
        selectedYear={selectedYear}
        sortBy={sortBy}
        onGenreChange={handleGenreChange}
        onYearChange={handleYearChange}
        onSortByChange={handleSortByChange}
        onClear={handleOnClear}
      />
      <div style={{ display: "flex", height: "780px" }}>
        {loading ? <Loader /> : <MovieListComponent movies={movies} />}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onSelectPage={handlePageChange}
      />
    </div>
  );
}
