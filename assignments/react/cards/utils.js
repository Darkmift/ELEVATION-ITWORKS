export function buildDeck() {
  const fullSuites = ['♠', '♥', '♦', '♣'];

  const deck = [];

  for (let i = 0; i < 4; i++) {
    for (let j = 1; j <= 13; j++) {
      deck.push({
        type: fullSuites[i],
        value: j,
        color: ['♥', '♦'].includes(fullSuites[i]) ? 'red' : 'black',
      });
    }
  }

  return deck;
}

// a fn thats shuffles the deck
export function shuffleDeck(deck) {
  return deck.sort(() => Math.random() - 0.5);
}
