import React, { PropTypes } from 'react'
import Question from './../components/Question'
import Recommendation from './../components/Recommendation'

import { connect } from 'react-redux'

const SurveyWrapper = ({ children }) => (
  <div id="survey">
    <h1>Questionnaire</h1>
    { children }
  </div>
)
SurveyWrapper.propTypes = {
  children : PropTypes.node.isRequired,
}

const Survey = ({ prompt, dispatch, currentQuestion, numQuestions, responses }) => {
  if(currentQuestion === numQuestions) {
    const score = responses.reduce((sum, next) => sum + next, 0);
    return <SurveyWrapper>
      <div>Survey complete!</div>
      <p>Your score is { score }. Here is your recommedation:</p>
      <Recommendation score={ score } />
    </SurveyWrapper>
  }

  return <SurveyWrapper>
    <div style={{backgroundColor:'white', padding: '10px'}}>
      ({currentQuestion + 1} of {numQuestions}) Over the last two weeks, how often have you been bothered by:
      <Question
        prompt={prompt}
        id={currentQuestion}
        response={responses[currentQuestion]}
      />
    </div>
    <div id="progress">
      <div style={{float:'left'}}>
        {(() => {
          const boxes = [];
          let currentBox = numQuestions;
          while(--currentBox >= 0) {
            let classes = 'box';
            if(typeof responses[currentBox] !== 'undefined')
              classes += ' responded';
            // bad hack to preserve box ID for dispatching later
            const boxId = currentBox;
            boxes.unshift(<div

              onClick={() => dispatch({ type : 'GOTO', question : boxId })}
              key={ currentBox }
              className={classes}
            />);
          }
          return boxes;
        })()}
      </div>
      <div style={{float:'right'}}>
        <button disabled={currentQuestion === 0} onClick={() => dispatch({ type : 'GO_PREV' })}>Previous Question</button>
        <button disabled={currentQuestion === numQuestions - 1} onClick={() => dispatch({ type : 'GO_NEXT' })}>Next Question</button>
      </div>
      <br className="clear" />
    </div>
  </SurveyWrapper>
}

Survey.propTypes = {
  dispatch : PropTypes.func.isRequired,
  prompt : PropTypes.string.isRequired,
  numQuestions : PropTypes.number.isRequired,
  currentQuestion : PropTypes.number.isRequired,
  responses: PropTypes.array.isRequired,
};

export default connect(({ questions, responses }) => {
  return {
    prompt : questions.allQuestions[questions.currentQuestion],
    currentQuestion : questions.currentQuestion,
    numQuestions : questions.allQuestions.length,
    responses,
  };
})(Survey)