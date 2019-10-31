export function getLetterMatchCount(secretWord, guessedWord) {
    const secretWordSet = new Set(secretWord.split(''));
    const guessedWordSet = new Set(guessedWord.split(''));

    return [...secretWordSet].filter(letter => guessedWordSet.has(letter)).length;
}