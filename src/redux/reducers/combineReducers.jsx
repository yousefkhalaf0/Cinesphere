import { combineReducers } from "redux";
import favToggleReducer from "./favouriteReducer";
import moviesReducer from "./moviesReducer";

export default combineReducers({
    fav: favToggleReducer,
    movies: moviesReducer,
})