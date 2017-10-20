import { ADD_DECK, RECEIVE_DECKS } from '../actions';

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
    default: return state;
  }
}
