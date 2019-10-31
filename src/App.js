import React from 'react';
import logo from './logo.svg';
import './App.css';
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h3>Jotto</h3>
        <Congrats success={true} />
        <GuessedWords guessedWords={[
          {guessedWord: 'train', letterMatchCount: 3}
        ]} />
      </div>
    );
  }
}

export default App;
