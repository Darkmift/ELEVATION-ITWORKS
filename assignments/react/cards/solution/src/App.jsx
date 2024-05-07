/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import './App.css';
import { useEffect, useState } from 'react';
import { buildDeck, shuffleDeck } from '../../utils';

function checkCardsValue(cards) {
  return cards.reduce((acc, card) => acc + card.value, 0);
}

function GameTitle({ status }) {
  const titles = {
    start: 'Click "deal" to get cards, "stop" to stop',
    playing: 'Player turn',
    stop: 'House turn',
    win: 'Player wins',
    lose: 'House wins',
  };
  return <h1>{titles[status]}</h1>;
}

function Button({ onClick, disabled, text }) {
  return (
    <button disabled={disabled} onClick={onClick} type="button">
      {text}
    </button>
  );
}

function ShowCards({ cards, player }) {
  return (
    <div>
      <h3>
        {player} cards ({checkCardsValue(cards)})
      </h3>
      {cards.map((card) => (
        <div key={card.value + card.type} className={`card ${card.color}-card`}>
          <span>{card.value}</span>
          <span>{card.type}</span>
        </div>
      ))}
    </div>
  );
}

const deck = shuffleDeck(buildDeck());

function App() {
  const [gameState, setGameState] = useState({
    cards: deck,
    house: [],
    player: [],
    status: 'start', // start|playing|stop|win|lose
  });

  useEffect(() => {
    if (gameState.player.length === 0 && gameState.house.length === 0) return;

    const playerCount = checkCardsValue(gameState.player);
    const houseCount = checkCardsValue(gameState.house);
    let status = gameState.status;

    if (playerCount === 21 || houseCount > 21) {
      status = 'win';
    } else if (playerCount > 21 || houseCount === 21 || (houseCount > playerCount && houseCount <= 21)) {
      status = 'lose';
    } else if (gameState.house.length) {
      status = 'stop';
    }

    setGameState((prevState) => ({ ...prevState, status }));
  }, [gameState.player.length, gameState.house.length, checkCardsValue]);

  useEffect(() => {
    if (gameState.house.length && checkCardsValue(gameState.house) < 17) {
      dealHouse();
    }
  }, [gameState.house.length, checkCardsValue]);

  const dealCard = () => {
    const deck = structuredClone(gameState.cards);
    return [deck.pop(), deck];
  };

  const dealPlayer = () => {
    const [newCard, cardsLeft] = dealCard();
    setGameState((prevState) => ({
      ...prevState,
      cards: cardsLeft,
      player: [...prevState.player, newCard],
    }));
  };

  const dealHouse = () => {
    const [newCard1, cardsLeft] = dealCard();
    setGameState((prevState) => ({
      ...prevState,
      cards: cardsLeft,
      house: [...prevState.house, newCard1],
    }));
  };

  const resetGame = () => {
    setGameState({
      cards: shuffleDeck(buildDeck()),
      house: [],
      player: [],
      status: 'start',
    });
  };

  return (
    <>
      <GameTitle status={gameState.status} />
      <div className="buttons">
        <Button
          onClick={dealPlayer}
          disabled={gameState.status !== 'start' && gameState.status !== 'playing'}
          text="Deal"
        />
        <Button onClick={dealHouse} disabled={gameState.status === 'stop'} text="Stop" />
        <Button onClick={resetGame} disabled={false} text="Reset" />
      </div>
      <div className="display-cards">
        <ShowCards cards={gameState.player} player="Player" />
        {gameState.status !== 'start' && gameState.status !== 'playing' && gameState.house.length > 0 && (
          <ShowCards cards={gameState.house} player="House" />
        )}
      </div>
    </>
  );
}

export default App;
