import allQuestions  from './../data/questions';

const initialState = {
  allQuestions,
  currentQuestion : 0,
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'GOTO':
      return {
        ...state,
        currentQuestion : action.question,
      };
    case 'GO_NEXT':
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
      }
    case 'GO_PREV':
      return {
        ...state,
        currentQuestion: state.currentQuestion - 1,
      }
    default:
      return state;
  }
}