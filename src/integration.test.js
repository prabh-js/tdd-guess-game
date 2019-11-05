import { storeFactory } from './test/testUtils';
import { guessWord } from './actions';

describe('guessed word action dispatcher', () => {
    const secretWord = 'party';
    const unsuccessfullGuess = 'train';
    describe('no guessed words', () => {
        const initialState = { secretWord };
        let store;
        beforeEach(() => {
            store = storeFactory(initialState);

        })
        test('updates state correctly for unsuccessful guess', () => {
            store.dispatch(guessWord(unsuccessfullGuess));
            const newState = store.getState();
            const expectedState = {
                ...initialState,
                success: false,
                guessedWords: [{
                    guessedWord: unsuccessfullGuess,
                    letterMatchCount: 3,
                }]
            }
            expect(newState).toEqual(expectedState);
        });
        test('updates state correctly for successful guess', () => {
            store.dispatch(guessWord(secretWord));
            const newState = store.getState();
            const expectedState = {
                ...initialState,
                success: true,
                guessedWords: [{
                    guessedWord: secretWord,
                    letterMatchCount: 5,
                }]
            }
            expect(newState).toEqual(expectedState);
        });
    });
    describe('some guessed words', () => {
        const guessedWords = [{ guessedWord: 'agile', letterMatchCount: 1 }];
        const initialState = { guessedWords, secretWord };
        let store;
        beforeEach(() => {
            store = storeFactory(initialState);
        })
        test('updates state correctly for unsuccessful guess', () => {
           store.dispatch(guessWord(unsuccessfullGuess));
           const newState = store.getState();
           const expectedState = {
               secretWord,
               success: false,
               guessedWords: [ ...guessedWords, { guessedWord: unsuccessfullGuess, letterMatchCount: 3 }]
           }
           expect(newState).toEqual(expectedState);
        });
        test('updates state correctly for successful guess', () => {
            store.dispatch(guessWord(secretWord));
           const newState = store.getState();
           const expectedState = {
               secretWord,
               success: true,
               guessedWords: [ ...guessedWords, { guessedWord: secretWord, letterMatchCount: 5 }]
           }
           expect(newState).toEqual(expectedState);
        });
    })
})