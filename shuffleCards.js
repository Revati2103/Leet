
Given a deck of cards, write a function that will shuffle the deck

function shuffleDeck(deck) {
  const n = deck.length;

  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]]; // Swap elements
  }

  return deck;
}

