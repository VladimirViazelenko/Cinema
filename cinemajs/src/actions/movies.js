import axios from 'axios';
import {SET_MOVIES, SET_MOVIES_FAIL, MOVIES_URL} from "../constants";

const setMovies = (data) => ({type: SET_MOVIES, payload: data});
const setMoviesFail = () => ({type: SET_MOVIES_FAIL});


export const getMovies = () => {
    return (dispatch) => {
        axios.get(`${MOVIES_URL}`)
        .then((response) => {
            dispatch(setMovies(response.data.movies));
        })
        .catch((error) => {
            dispatch(setMoviesFail());
        console.log("error", error);
        })
    }
};