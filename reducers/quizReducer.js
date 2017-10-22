import {
  RESET_QUIZ, RECEIVE_CORRECT, RECEIVE_INCORRECT, SETUP_QUIZ,
} from '../actions';

const initialState = {
  currentCardPosition: null,
  deckId: null,
  score: null,
};

export default function quiz(state = initialState, action) {
  switch (action.type) {
    case RESET_QUIZ: {
      return initialState;
    }
    case RECEIVE_CORRECT: {
      return {
        ...state,
        currentCardPosition: action.nextCardPosition,
        score: state.score + 1,
      };
    }
    case RECEIVE_INCORRECT: {
      return {
        ...state,
        currentCardPosition: action.nextCardPosition,
      };
    }
    case SETUP_QUIZ: {
      return {
        currentCardPosition: 0,
        deckId: action.deckId,
        score: 0,
      };
    }
    default: return state;
  }
}
