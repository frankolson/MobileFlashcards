export const RESET_QUIZ = 'RESET_QUIZ';
export const RECEIVE_CORRECT = 'RECEIVE_CORRECT';
export const RECEIVE_INCORRECT = 'RECEIVE_INCORRECT';
export const SETUP_QUIZ = 'SETUP_QUIZ';

export function receiveCorrect(nextCardPosition) {
  return {
    type: RECEIVE_CORRECT,
    nextCardPosition,
  };
}

export function receiveIncorrect(nextCardPosition) {
  return {
    type: RECEIVE_INCORRECT,
    nextCardPosition,
  };
}

export function resetQuiz() {
  return {
    type: RESET_QUIZ,
  };
}

export function setupQuiz(deckId) {
  return {
    type: SETUP_QUIZ,
    deckId,
  };
}
