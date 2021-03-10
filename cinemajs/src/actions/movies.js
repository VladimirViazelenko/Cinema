import axios from 'axios';
import {SET_MOVIES, SET_MOVIES_FAIL, BASE_URL} from "../constants";

const setMovies = (data) => ({type: SET_MOVIES, payload: data});
const setMoviesFail = () => ({type: SET_MOVIES_FAIL});

const mockMovies = [
    {
        id: 1,
        title: 'Movie 1',
        poster: 'https://www.kinonews.ru/insimgs/poster/poster15004_1.jpg'
    },
    {
        id: 2,
        title: 'Movie 2',
        poster: 'https://www.kinonews.ru/insimgs/poster/poster15004_1.jpg'
    },
    {
        id: 3,
        title: 'Movie 3',
        poster: 'https://www.kinonews.ru/insimgs/poster/poster15004_1.jpg'
    },
    {
        id: 4,
        title: 'Movie 4',
        poster: 'https://www.kinonews.ru/insimgs/poster/poster15004_1.jpg'
    },
    {
        id: 5,
        title: 'Movie 5',
        poster: 'https://www.kinonews.ru/insimgs/poster/poster15004_1.jpg'
    },
    {
        id: 6,
        title: 'Movie 6',
        poster: 'https://www.kinonews.ru/insimgs/poster/poster15004_1.jpg'
    },
    {
        id: 7,
        title: 'Movie 7',
        poster: 'https://www.kinonews.ru/insimgs/poster/poster15004_1.jpg'
    },
    {
        id: 8,
        title: 'Movie 8',
        poster: 'https://www.kinonews.ru/insimgs/poster/poster15004_1.jpg'
    },
    {
        id: 9,
        title: 'Movie 9',
        poster: 'https://www.kinonews.ru/insimgs/poster/poster15004_1.jpg'
    },
    {
        id: 10,
        title: 'Movie 10',
        poster: 'https://www.kinonews.ru/insimgs/poster/poster15004_1.jpg'
    },
    {
        id: 11,
        title: 'Movie 11',
        poster: 'https://www.kinonews.ru/insimgs/poster/poster15004_1.jpg'
    },
    {
        id: 12,
        title: 'Movie 12',
        poster: 'https://www.kinonews.ru/insimgs/poster/poster15004_1.jpg'
    },
]

export const getMovies = () => {
    return (dispatch) => {
        dispatch(setMovies(mockMovies))
        // axios.get(`${BASE_URL}movie`)
        // .then((response) => {
        //     console.log('response', response);
        // })
        // .catch((error) => {
        //     console.log("error", error);
        // })
    }
};