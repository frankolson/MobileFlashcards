import { AsyncStorage } from 'react-native';
import uuidv4 from 'uuid/v4';

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

export const saveDeckTitle = title => (
  AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY, JSON.stringify({
    [uuidv4()]: {
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
