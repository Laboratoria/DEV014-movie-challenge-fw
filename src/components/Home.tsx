import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Navbar from "./nav";
import CarouselFadeExample from "./carousel";
import MovieList from "./MovieList";
import PaginationComponent from "./Pagination"; 
import { Services } from "../services/APIService";
import { Movie } from '../models/Movie';
import { useSearchParams } from 'react-router-dom';
import ListOptions from './ListOptions';
import getMovieGenres from '../services/movieService';
import {formatGenresToMap, formatGenresToOptions} from '../utils/transformers'

const Home: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [genreMap, setGenreMap] = useState<Map<number, string>>(new Map());
    const [genreOptions, setGenreOptions] = useState<{ value: string; label: string }[]>([]);
    const sortOptions= [{value: 'popularity.asc', label:'Popularity - Asc.'}, {value: 'popularity.desc', label:'Popularity - Desc.'}]
    const services = new Services();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [totalPages, setTotalPages] = useState(1);
    const [params, setParams] = useSearchParams()
    const page = parseInt(params.get('page') || '1');
    const genre= params.get('genre')
    const sort_by= params.get('sort_by')
    const [selectedGenre, setSelectedGenre] = useState<{ value: string; label: string } > ({ value: '0', label: '' });
    const [selectedSort, setSelectedSort] = useState<{ value: string; label: string }>({ value: '', label: '' });

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 1000));

                const genresArray = await getMovieGenres();
                const genresMap = formatGenresToMap(genresArray);
                setGenreMap(genresMap);

                const genreOptions = formatGenresToOptions(genresArray);
                setGenreOptions(genreOptions);

                
                const { movies} = await services.getMovies({ filters: { page } }, genresMap, genreId, sortValue);
                setMovies(movies);
                setTotalPages(500);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                setError(true);
                console.error('Error fetching movies:', error);
            }
        };

        const genreId = selectedGenre ? parseInt(selectedGenre.value) : null;
        const sortValue= selectedSort ? selectedSort.value : null
        fetchMovies();
    }, [params, selectedGenre, selectedSort]);

    const handelSelectPage = (page: number) => {
        setParams({genre: selectedGenre.label, sort_by: selectedSort.value, page: page.toString()})
    };


    const handleOnChange = (option: { value: string; label: string }, type: string) => {
        if (type === 'genre') {
            setSelectedGenre(option); 
            setParams({genre: option.label,sort_by: selectedSort.value, page: page.toString()})
        } else if (type === 'sort') {
            setSelectedSort(option);
            setParams({genre: selectedGenre.label, sort_by: option.value, page: page.toString()})
        }
        
    };

    const handleOnClear = (type: string) => {
        if (type === 'genre') {
            setSelectedGenre(null);
        } else if (type === 'sort') {
            setSelectedSort(null);
        }
        setParams({ page: page.toString() })
    };

    return (
        <div>
            <Navbar />
            <div>
                <CarouselFadeExample />
                <div className="container-lg d-flex justify-content-center justify-content-md-start my-4 my-md-5 px-md-5">
                <ListOptions
                        options={genreOptions}
                        selectedOption={selectedGenre}
                        onChange={(option) => handleOnChange(option, 'genre')}
                        onClear={() => handleOnClear('genre')} 
                        tipo='genre'              
                    />
                    <ListOptions
                        options={sortOptions}
                        selectedOption={selectedSort}
                        onChange={(option) => handleOnChange(option, 'sort')}
                        onClear={() => handleOnClear('sort')} 
                        tipo='sort'              
                    />
                </div>
        
            </div>
            <div className="container-lg my-2">
                <div>
                    {isLoading && (
                        <div className="spinner-container">
                            <Spinner animation="grow" variant="primary" className="large-spinner" />
                        </div>
                    )}
                    {error && (
                        <div className="spinner-container">
                            <p className="spectral-extrabold fs-3">Something went wrong while fetching movies.</p>
                        </div>
                    )}
                    {!isLoading && !error && (
                        <MovieList movie={movies} />
                    )}
                </div>
            </div>
            <div>
                {!isLoading && !error && (
                    <PaginationComponent
                        currentPage={page}
                        totalPages={totalPages}
                        onSelectPage={handelSelectPage}
                    />
                )}
            </div>
        </div>
    );
};

export default Home;
