import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../../SubComponents/MovieCard";
import TitleComponent from "../../SubComponents/TitleComponent";

function FavouritePage() {
    const favedMovies = useSelector((state) => state.fav.favedMovies);
    const allMovies = useSelector((state) => state.movies.allMovies);
    const genres = useSelector((state) => state.movies.genres);
    const favedMoviesList = allMovies.filter((movie) => favedMovies.includes(movie.id));

    const getGenreNames = (genreIds) => {
        return genreIds
            .map((id) => genres.find((genre) => genre.id === id)?.name)
            .filter((name) => name)
            .join(' / ');
    };

    return (
        <div className="container pt-5">
            <TitleComponent title="Favourite Movies" textColor="primary" margin="m-5" />
            <div className="row mx-auto justify-content-center">
                {favedMoviesList.length > 0 ? (
                    favedMoviesList.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            borderClr="white"
                            imgPath={movie.poster_path}
                            movieName={movie.title}
                            movieRate={movie.vote_average}
                            releasedYear={new Date(movie.release_date).getFullYear()}
                            genres={getGenreNames(movie.genre_ids)}
                            path={`/movieDetails/${movie.id}`}
                            movieId={movie.id}
                        />
                    ))
                ) : (
                    <p className="text-center mt-5">No favourite movies yet.</p>
                )}
            </div>
        </div>
    );
}
export default FavouritePage;