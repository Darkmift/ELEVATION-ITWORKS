/* eslint-disable react/prop-types */
import './App.css';
import { GameContext } from './context';
import { useContext } from 'react';

function GameTitle() {
  const gameCtx = useContext(GameContext);

  const initialGameState = gameCtx.gameState;

  const status = initialGameState.status;
  const currentPlayer = initialGameState.currentPlayer;
  const winner = initialGameState.winner;

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

  const gameCtx = useContext(GameContext);

  const clickCellHandler = () => {
    gameCtx.makeMove(cell.i, cell.j);
  };
  return (
    <button className="square" onClick={clickCellHandler}>
      {props.cell.value}{' '}
    </button>
  );
}

function Row(props) {
  return (
    <div className="board-row">
      {props.row.map((cell, j) => {
        const cellData = { value: cell, i: props.rowId, j };
        return <Cell key={`${props.rowId}${j}`} cell={cellData} />;
      })}
    </div>
  );
}

function Board() {
  const gameCtx = useContext(GameContext);
  const initialGameState = gameCtx.gameState;
  const board = initialGameState.board; // matrix

  return (
    <div className="board">
      {board.map((row, i) => (
        <Row rowId={i} key={i} row={row} />
      ))}
    </div>
  );
}

function App() {
  return (
    <>
      <GameTitle />
      <Board />
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
