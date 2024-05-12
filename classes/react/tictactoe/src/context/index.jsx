/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { createContext, useContext } from 'react';

const initialGameState = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  currentPlayer: 'X',
  winner: null,
  status: 'starting',
};

export const GameContext = createContext();

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const GameContextProvider = ({ children }) => {
  const [gameState, setGameState] = useState(initialGameState);

  const makeMove = (i, j) => {
    const newGameState = structuredClone(gameState);
    newGameState.board[i][j] = newGameState.currentPlayer;
    newGameState.currentPlayer = newGameState.currentPlayer === 'X' ? 'O' : 'X';
    newGameState.status = 'playing';
    const winner = calculateWinner(newGameState.board.flat()); // X|O|null
    if (winner) {
      newGameState.status = 'won';
      newGameState.winner = winner;
    }
    setGameState(newGameState);
  };

  return <GameContext.Provider value={{ gameState, makeMove }}>{children}</GameContext.Provider>;
};

export const useGameCtx = () => useContext(GameContext);

export default GameContextProvider;

const Foo = ({ children, color = '#ccc' }) => {
  return <div style={{ backgroundColor: color }}>{children}</div>;
};

<Foo color={'red'}>
  <h1>Foo</h1>
  <Foo color={'green'}>
    <h1>Foo</h1>
    <p>Bar</p>
    <Foo>
      <h1>Foo</h1>
      <p>Bar</p>
    </Foo>
  </Foo>
  <p>Bar</p>
</Foo>;
