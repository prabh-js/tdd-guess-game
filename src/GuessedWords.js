import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = (props) => {
    let contents;
    if (props.guessedWords.length === 0) {
        contents = (
            <span data-test="guess-instructions">Try to guess a word!</span>
        )
    }
    else {
        let guessedWords = props.guessedWords.map((word) => {
            return (
                <tr key={word.guessedWord} data-test="guessed-word">
                    <td>{word.guessedWord}</td>
                    <td>{word.letterMatchCount}</td>
                </tr>
            )
        })
        contents = (
            <div data-test="guessed-words">
                <h3>Guessed Words!</h3>
                <table className="table table-sm">
                    <thead className="thead-light">
                        <tr>
                            <th>Guess</th>
                            <th>Matching letters</th>
                        </tr>
                    </thead>
                    <tbody>
                        {guessedWords}
                    </tbody>
                </table>
            </div>
        )
    }
    return (
        <div data-test="component-guessed-words">
            {contents}
        </div>
    )
}
GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        })
    ).isRequired
}
export default GuessedWords;