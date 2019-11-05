import { getLetterMatchCount } from '../helpers';
import axios from 'axios';

export const actionTypes = {
    CORRECT_GUESS: 'CORRECT_GUESS',
    GUESS_WORD: 'GUESS_WORD',
    SET_SECRET_WORD: 'SET_SECRET_WORD',
}

export const guessWord = (guessedWord) => {
    return function(dispatch, getState) {
        const secretWord = getState().secretWord;
        const letterMatchCount = getLetterMatchCount(secretWord, guessedWord);
        dispatch({
            type: actionTypes.GUESS_WORD,
            payload: { guessedWord, letterMatchCount }
        });
        if (secretWord === guessedWord) {
            dispatch({
                type: actionTypes.CORRECT_GUESS
            });
        }
    }
}
export const getSecretWord = () => {
    return (dispatch) => {
        return axios.get('http://localhost:3030')
        .then((response) => {
            dispatch({
                type: actionTypes.SET_SECRET_WORD,
                payload: response.data
            })
        })
    }
}