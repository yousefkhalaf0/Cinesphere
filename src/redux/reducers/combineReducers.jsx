import { combineReducers } from "redux";
import favToggleReducer from "./favouriteReducer";
import moviesReducer from "./moviesReducer";
import toggleThemeReducer from "../reducers/toggleThemeReducer"

export default combineReducers({
    fav: favToggleReducer,
    movies: moviesReducer,
    theme: toggleThemeReducer,
})