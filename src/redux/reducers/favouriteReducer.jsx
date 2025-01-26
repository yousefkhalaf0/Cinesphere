const INITIAL_VALUE = {
    favedMovies: [],
};

export default function favToggleReducer(state = INITIAL_VALUE, action) {
    switch (action.type) {
        case "FAV_TOGGLE":
            const movieId = action.payload;
            const isFaved = state.favedMovies.includes(movieId);

            return {
                ...state,
                //searches for this
                favedMovies: isFaved
                    ? state.favedMovies.filter(id => id !== movieId)
                    : [...state.favedMovies, movieId],
            };
        default:
            return state;
    }
}