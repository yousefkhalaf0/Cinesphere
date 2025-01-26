import axios from 'axios';

export const setMovie = (payload) => {
    return {
        type: "SET_MOVIES",
        payload,
    };
};

export const setCurrentPageMovies = (payload) => {
    return {
        type: "SET_CURRENT_PAGE_MOVIES",
        payload,
    };
};

export const setGenres = (payload) => {
    return {
        type: "SET_GENRES",
        payload,
    };
};

export const updateMovieDetails = (payload) => {
    return {
        type: "UPDATE_MOVIE_DETAILS",
        payload,
    };
};

export const fetchMovies = (page = 1, search = '', isSearching = false, language = 'en') => async (dispatch) => {
    const apiKey = 'aec7a120efc0f2607c66f43ac96e5187';
    const baseUrl = 'https://api.themoviedb.org/3/movie/popular';
    const searchUrl = 'https://api.themoviedb.org/3/search/movie';
    const url = isSearching
        ? `${searchUrl}?api_key=${apiKey}&query=${search}&page=${page}&language=${language}`
        : `${baseUrl}?api_key=${apiKey}&page=${page}&language=${language}`;

    try {
        const response = await axios.get(url);
        dispatch(setMovie(response.data.results));
        dispatch(setCurrentPageMovies(response.data.results));
        return response.data.total_pages;
    } catch (error) {
        console.log(error);
        return 1;
    }
};

//searched for this
export const fetchMovieDetails = (movieId, language = 'en') => async (dispatch) => {
    const apiKey = 'aec7a120efc0f2607c66f43ac96e5187';
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=${language}`;

    try {
        const response = await axios.get(url);
        dispatch(updateMovieDetails({
            ...response.data,
            genre_ids: response.data.genres.map(genre => genre.id)
        }));
    } catch (error) {
        console.log(error);
    }
};

export const fetchGenres = (language = 'en') => async (dispatch) => {
    const apiKey = 'aec7a120efc0f2607c66f43ac96e5187';
    const genreUrl = 'https://api.themoviedb.org/3/genre/movie/list';

    try {
        const response = await axios.get(`${genreUrl}?api_key=${apiKey}&language=${language}`);
        dispatch(setGenres(response.data.genres));
    } catch (error) {
        console.log(error);
    }
};