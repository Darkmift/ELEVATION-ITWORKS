/* eslint-disable react/prop-types */
import './App.css';
import { useState } from 'react';

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

function GameTitle(props) {
  const gameState = props.gameState;
  const status = gameState.status;
  const currentPlayer = gameState.currentPlayer;
  const winner = gameState.winner;

  if (status === 'starting') {
    return <h1>Hello</h1>;
  }

  if (status === 'playing') {
    return <h1>Next Player: {currentPlayer}</h1>;
  }

  if (status === 'won') {
    return <h1>Player {winner} won</h1>;
  }

  if (status === 'draw') {
    return <h1>Draw</h1>;
  }
}

function Cell(props) {
  const { cell } = props;
  const clickCellHandler = () => {
    props.setCellValue(cell.i, cell.j);
  };
  return (
    <button className="square" onClick={clickCellHandler}>
      {props.cell.value} {/* VALID RENDERS strng|number|React node (JSX) */}
    </button>
  );
}

function Row(props) {
  return (
    <div className="board-row">
      {props.row.map((cell, j) => {
        const cellData = { value: cell, i: props.rowId, j };
        return <Cell setCellValue={props.setCellValue} key={`${props.rowId}${j}`} cell={cellData} />;
      })}
    </div>
  );
}

function Board(props) {
  const board = props.gameState.board; // matrix
  const currentPlayer = props.gameState.currentPlayer;
  return (
    <div className="board">
      {board.map((row, i) => (
        <Row currentPlayer={currentPlayer} setCellValue={props.setCellValue} rowId={i} key={i} row={row} />
      ))}
    </div>
  );
}

function App() {
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

  const [gameState, setGameState] = useState(initialGameState);

  const setCellValue = (i, j) => {
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

  return (
    <>
      <GameTitle gameState={gameState} />
      <Board setCellValue={setCellValue} gameState={gameState} />
    </>
  );
}

export default App;

/*

// BAD NAMES
// Child
// Div
// Image

const n1 = () => 55;
const n1 = () => 55;
const n3 = () => {
  return {};
};
const n4 = () => ({});

function BoardLegacy() {
  return (
    <div className="board">
      <div className="board-row">
        <button className="square"></button>
        <button className="square"></button>
        <button className="square"></button>
      </div>
      <div className="board-row">
        <button className="square"></button>
        <button className="square"></button>
        <button className="square"></button>
      </div>
      <div className="board-row">
        <button className="square"></button>
        <button className="square"></button>
        <button className="square"></button>
      </div>
    </div>
  );
}

function makeCube(i, j) {
  return <button key={`${i}${j}`} className="square"></button>;
}

makeCube(0, 0); // <button key="00" className="square"></button>

function makeRow(row) {
  return row.map((cell, j) => makeCube(row, j));
}

makeRow([null, null, null]); //
var foo = [
  <button key="00" className="square"></button>,
  <button key="01" className="square"></button>,
  <button key="02" className="square"></button>,
];

function Board2() {
  const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  const board = Array(3).fill(Array(3).fill(null));
  const board = [];
  for (let i = 0; i < 3; i++) {
    const row = [];
    for (let j = 0; j < 3; j++) {
      row.push(null);
    }
    board.push(row);
  }

  return (
    <div className="board">
      {board.map((row, i) => (
        <div key={i} className="board-row">
          {row.map((cell, j) => (
            <button key={j} className="square"></button>
          ))}
        </div>
      ))}
    </div>
  );
}

function MyCMP(props) {
  return <></>;
}
*/

