import * as actionTypes from '../actions/action-types/actionTypes';

const initialState = {
    movies: [], // list of movies containing title, year, and imdbID and so on
}

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_LIST:
            return {
                ...state,
                movies: [...state.movies, action.payload.id]
            };
        case actionTypes.REMOVE_FROM_LIST:
            return {
                ...state,
                movies: [...state.movies, action.payload.id]
            };
        default:
            return state;
    }
}

export default listReducer;