import { RECEIVE_DECKS } from '../actions';

export default function decks(state = {
  decks: {},
}, action) {
  switch (action.type) {
    case RECEIVE_DECKS: {
      return action.decks;
    }
    default: return state;
  }
}
