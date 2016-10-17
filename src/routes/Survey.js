import React, { PropTypes } from 'react'
import Question from './../components/Question'

import { connect } from 'react-redux'

const Survey = ({ prompt, dispatch, currentQuestion, numQuestions }) => {
  return <div id="survey">
    <h1>Questionnaire</h1>
    <div style={{backgroundColor:'white', padding: '10px'}}>
      Over the last two weeks, how often have you been bothered by:
      <Question prompt={prompt} id={currentQuestion} />
    </div>
    <button disabled={currentQuestion === 0} onClick={() => dispatch({ type : 'GO_PREV' })}>Previous Question</button>
    <button disabled={currentQuestion === numQuestions - 1} onClick={() => dispatch({ type : 'GO_NEXT' })}>Next Question</button>
  </div>
}

Survey.propTypes = {
  dispatch : PropTypes.func.isRequired,
  prompt : PropTypes.string.isRequired,
  numQuestions : PropTypes.number.isRequired,
  currentQuestion : PropTypes.number.isRequired,
};

export default connect(({ questions }) => {
  return {
    prompt : questions.allQuestions[questions.currentQuestion],
    currentQuestion : questions.currentQuestion,
    numQuestions : questions.allQuestions.length,
  };
})(Survey)