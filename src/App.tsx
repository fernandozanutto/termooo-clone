import './App.css';
import GameBoard from './components/GameBoard';
import Keyboard from './components/Keyboard';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div></div>
        <h1>TERMO</h1>
        <div></div>
        <div></div>
      </header>
      <GameBoard />
      <Keyboard />
    </div>
  );
}

export default App;
