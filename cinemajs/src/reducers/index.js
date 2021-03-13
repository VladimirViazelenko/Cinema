import {SET_MOVIES, SET_MOVIES_FAIL } from '../constants';

const defaultValues = {
    genres: [],
    movies: [],
    isLoading: true
};

export const movieReducer = (state = defaultValues, action) => {
    switch (action.type) {
        case SET_MOVIES: {
            const genres = action.payload.reduce((acc, item) => {
                if (item.genre && item.genre.length) {
                    item.genre.forEach((elem) => {
                        const value = elem.trim();
                        if (!acc.includes(value)) {
                            acc.push(value);
                        }
                    });
                }

                return acc;
            }, []);

            return {
                genres: genres,
                movies: action.payload,
                isLoading: false,
            }
        }
        case SET_MOVIES_FAIL: {
            return {
                ...state,
                isLoading: false
            }
        }
        default: {
            return state;
        }
    }
}