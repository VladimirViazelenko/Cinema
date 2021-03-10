import {SET_MOVIES} from '../constants'
const defaultValues = {
    movies: []
};
export const movieReducer = (state = defaultValues, action) => {
    switch (action.type) {
        case SET_MOVIES: {
            return {
                movies: action.payload
            }
        }
        default: {
            return state;
        }
    }
}