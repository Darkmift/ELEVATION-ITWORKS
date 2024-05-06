export default function buildDeck() {
  const fullSuites = ['♠', '♥', '♦', '♣'];

  const deck = [];

  for (let i = 0; i < 4; i++) {
    for (let j = 1; j <= 13; j++) {
      deck.push({ type: fullSuites[i], value: j });
    }
  }

  return deck;
}

// a fn thats shuffles the deck
export default function shuffleDeck(deck) {
  return deck.sort(() => Math.random() - 0.5);
}
