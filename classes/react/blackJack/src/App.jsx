import React, { useState } from 'react';
import './App.css';

function buildDeck() {
  const fullSuites = ['♠', '♥', '♦', '♣'];
  const deck = [];

  for (let i = 0; i < 4; i++) {
    for (let j = 1; j <= 13; j++) {
      deck.push({ type: fullSuites[i], value: j });
    }
  }

  return deck;
}

function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

function App() {
  const [deck, setDeck] = useState(shuffleDeck(buildDeck()));
  const [winner, setWinner] = useState('');
  const [playerHand, setPlayerHand] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [playerScore, setPlayerScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const deckCopy = [...deck];

  const calculateHand = (hand) => {
    return hand.reduce((acc, card) => {
      let cardValue = card.value;

      if (cardValue > 10) {
        cardValue = 10;
      }

      if (cardValue === 1 && acc + 11 <= 21) {
        cardValue = 11;
      }

      return acc + cardValue;
    }, 0);
  };

  const deal = () => {
    if (gameOver) return;

    const newPlayerHand = [...playerHand, deckCopy.pop()];
    setPlayerHand(newPlayerHand);
    setDeck(deckCopy);

    const playerTotal = calculateHand(newPlayerHand);
    setPlayerScore(playerTotal);
    if (playerTotal > 21) {
      setWinner('House');
      setGameOver(true);
    } else if (playerTotal === 21) {
      setWinner('Player');
      setGameOver(true);
    }
  };

  const stop = () => {
    if (gameOver) return;

    const newDealerHand = [...dealerHand, deckCopy.pop(), deckCopy.pop(), deckCopy.pop()];
    setDealerHand(newDealerHand);
    setDeck(deckCopy); 

    const dealerTotal = calculateHand(newDealerHand);
    if (dealerTotal > 21 || dealerTotal < playerScore) {
      setWinner('Player');
    } else if (dealerTotal > playerScore) {
      setWinner('House');
    } else {
      setWinner('Draw');
    }

    setGameOver(true);
  };

  return (
    <div>
      <h1>Blackjack</h1>
      <div>
        <button onClick={deal} disabled={gameOver}>
          Deal
        </button>
        <button onClick={stop} disabled={gameOver}>
          Stop
        </button>
      </div>
      <div>
        <h2>Player Hand</h2>
        <p>
          {playerHand.map((card, index) => (
            <span key={index}>
              {card.type}-{card.value}
            </span>
          ))}
        </p>
        <p>Score: {playerScore}</p>
      </div>
      <div>
        <h2>Dealer Hand</h2>
        <p>
          {dealerHand.map((card, index) => (
            <span key={index}>
              {card.type}-{card.value}
            </span>
          ))}
        </p>
        <p>Score: {calculateHand(dealerHand)}</p>
      </div>
      {gameOver && <h2>Winner: {winner}</h2>}
    </div>
  );
}

export default App;
