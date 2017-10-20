import { AsyncStorage } from 'react-native';

const FLASHCARD_STORAGE_KEY = 'MobileFlashcards:data';

export const getDecks = () => (
  AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
    .then(results => JSON.parse(results))
);

export const getDeck = key => (
  getDecks()
    .then((results) => {
      if (typeof results[key] !== 'undefined') {
        return {
          ...results[key],
          id: key,
        };
      }
      return undefined;
    })
);

export const saveDeck = (id, title) => (
  AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY, JSON.stringify({
    [id]: {
      title,
      cards: [],
    },
  }))
);

export const addCardToDeck = (id, card) => (
  getDecks()
    .then((decks) => {
      decks[id].cards.push(card);
      return AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY, JSON.stringify(decks));
    })
);
