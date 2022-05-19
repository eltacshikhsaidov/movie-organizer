import * as actionTypes from './action-types/actionTypes';

export const addToList = (movieID) => {
    return {
        type: actionTypes.ADD_TO_LIST,
        payload: {
            id: movieID
        }
    }
}

export const removeFromList = (movieID) => {
    return {
        type: actionTypes.REMOVE_FROM_LIST,
        payload: {
            id: movieID
        }
    }
}

