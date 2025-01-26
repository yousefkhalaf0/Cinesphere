import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMovie, setCurrentPageMovies, setGenres } from '../../redux/actions/moviesAction';
import TitleComponent from '../../SubComponents/TitleComponent';
import MovieCard from '../../SubComponents/MovieCard';
import Pagination from '../../SubComponents/Pagination';
import headerImg from '../../assets/images/head.jpg';

const MoviesPage = () => {
    const apiKey = 'aec7a120efc0f2607c66f43ac96e5187';
    const baseUrl = 'https://api.themoviedb.org/3/movie/popular';
    const searchUrl = 'https://api.themoviedb.org/3/search/movie';
    const genreUrl = 'https://api.themoviedb.org/3/genre/movie/list';
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [search, setSearch] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const dispatch = useDispatch();
    const currentPageMovies = useSelector((state) => state.movies.currentPageMovies);
    const genres = useSelector((state) => state.movies.genres);

    useEffect(() => {
        const fetchGenres = () => {
            axios.get(`${genreUrl}?api_key=${apiKey}`)
                .then(response => {
                    dispatch(setGenres(response.data.genres));
                })
                .catch(error => {
                    console.log(error);
                });
        };

        fetchGenres();
    }, [dispatch]);

    useEffect(() => {
        const fetchMovies = () => {
            const url = isSearching
                ? `${searchUrl}?api_key=${apiKey}&query=${search}&page=${page}`
                : `${baseUrl}?api_key=${apiKey}&page=${page}`;

            axios.get(url)
                .then(response => {
                    dispatch(setMovie(response.data.results));
                    dispatch(setCurrentPageMovies(response.data.results));
                    setTotalPages(response.data.total_pages);
                })
                .catch(error => {
                    console.log(error);
                });
        };

        fetchMovies();
    }, [page, search, isSearching, dispatch]);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setPage(newPage);
        }
    };

    const handleSearchChange = (e) => {
        setIsSearching(true);
        setSearch(e.target.value);
        if (e.target.value.trim() === '') {
            setIsSearching(false);
        }
    };

    const getGenreNames = (genreIds) => {
        return genreIds
            .map((id) => genres.find((genre) => genre.id === id)?.name)
            .filter((name) => name)
            .join(' / ');
    };

    return (
        <>
            <header className="position-relative">
                <img src={headerImg} alt="Header" className="img-fluid w-100" />
                <div
                    className="position-absolute top-50 start-50 translate-middle text-center p-3"
                    style={{
                        maxWidth: '90%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        color: '#fff',
                        borderRadius: '10px',
                        animation: 'fadeIn 2s ease-in-out'
                    }}>
                    <h1 className="fs-3 mb-2">Welcome to Cinesphere</h1>
                    <p className="fs-5">Discover the latest movies</p>
                    <a
                        href="#titleComponent"
                        className="btn btn-primary mt-2"
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}>
                        Go to Movies
                    </a>
                </div>
            </header>
            <TitleComponent id='titleComponent' title="Cinesphere Movies" textColor="primary" margin="m-5" />
            <main className='row mx-auto justify-content-center'>
                <input
                    type="text"
                    className="form-control mb-4 w-75"
                    placeholder="Search for a movie..."
                    value={search}
                    onChange={handleSearchChange} />
                <Pagination
                    position="center"
                    currentPage={page}
                    totalPages={Math.min(totalPages, 500)}
                    onPageChange={handlePageChange} />
                {currentPageMovies.map(movie => (
                    <MovieCard
                        key={movie.id}
                        borderClr='white'
                        imgPath={movie.poster_path}
                        movieName={movie.title}
                        movieRate={movie.vote_average}
                        releasedYear={new Date(movie.release_date).getFullYear()}
                        genres={getGenreNames(movie.genre_ids)}
                        path={`/movieDetails/${movie.id}`}
                        movieId={movie.id} />
                ))}
                <Pagination
                    position="center"
                    currentPage={page}
                    totalPages={Math.min(totalPages, 500)}
                    onPageChange={handlePageChange} />
            </main>

            <footer className="my-5">&copy; 2025 Cinesphere YK</footer>

            {/* searched for this */}
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
            `}
            </style>
        </>
    );
};
export default MoviesPage;