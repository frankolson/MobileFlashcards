import { ADD_DECK, RECEIVE_DECKS, UPDATE_DECK } from '../actions';

export default function decks(state = {}, action) {
  switch (action.type) {
    case ADD_DECK: {
      return {
        ...state,
        [action.deck.id]: {
          title: action.deck.title,
          cards: action.deck.cards,
        },
      };
    }
    case RECEIVE_DECKS: {
      return action.decks;
    }
    case UPDATE_DECK: {
      return {
        ...state,
        [action.deck.id]: {
          title: action.deck.title,
          cards: action.deck.cards,
        },
      };
    }
    default: return state;
  }
}
