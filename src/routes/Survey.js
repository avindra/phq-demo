import React, { PropTypes } from 'react'
import Question from './../components/Question'
import { Match } from 'react-router'

import { connect } from 'react-redux'

const Survey = ({ prompt, dispatch }) => (
  <div>
    <h1>Survey!</h1>
    <p>Over the last two weeks, how often have you been bothered by any of the following problems?</p>
    <Question prompt={prompt} />
    <button onClick={() => dispatch({ type : 'GO_PREV' })}>Previous Question</button>
    <button onClick={() => dispatch({ type : 'GO_NEXT' })}>Next Question</button>
  </div>
)

Survey.propTypes = {
  dispatch : PropTypes.func.isRequired,
};

export default connect(({ questions }) => {
  return {
    prompt : questions.allQuestions[questions.currentQuestion],
  };
})(Survey)