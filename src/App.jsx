import { useState } from 'react';
import Board from './components/Board';
import StatusMessage from './components/StatusMessage';
import { calculateWinner } from './winner';
import './style.scss';

function App() {
  const [squares, setSequares] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(false);

  const winner = calculateWinner(squares);

  const handleSquareClick = clickedPosition => {
    if (squares[clickedPosition] || winner) {
      return;
    }

    setSequares(currentSquares => {
      return currentSquares.map((squareValue, position) => {
        if (clickedPosition === position) {
          return isNext ? 'X' : 'O';
        }
        return squareValue;
      });
    });

    setIsNext(currentIsNext => !currentIsNext);
  };

  return (
    <div className="app">
      <StatusMessage isNext={isNext} winner={winner} squares={squares} />
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
