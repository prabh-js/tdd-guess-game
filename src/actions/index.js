import { getLetterMatchCount } from '../helpers';

export const actionTypes = {
    CORRECT_GUESS: 'CORRECT_GUESS',
    GUESS_WORD: 'GUESS_WORD',
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