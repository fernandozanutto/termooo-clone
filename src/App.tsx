import React from 'react';
import './App.css';
import WordLine from './components/WordLine';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          TERMO
        </p>
      </header>
        <WordLine ativo={true}></WordLine>
        <WordLine></WordLine>
        <WordLine></WordLine>
        <WordLine></WordLine>
        <WordLine></WordLine>
        <WordLine></WordLine>
    </div>
  );
}

export default App;
