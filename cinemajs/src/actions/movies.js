import axios from 'axios';
import {SET_MOVIES, SET_MOVIES_FAIL, BASE_URL} from "../constants";

const setMovies = (data) => ({type: SET_MOVIES, payload: data});
const setMoviesFail = () => ({type: SET_MOVIES_FAIL});

const getMovies = () => {
    return (dispatch) => {
        axios.get(`${BASE_URL}movie`)
        .then((response) => {
            console.log('response', response);
        })
        .catch((error) => {
            console.log("error", error);
        })
    }
};