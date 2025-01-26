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