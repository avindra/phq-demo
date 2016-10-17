import React, { PropTypes } from 'react'

import { connect } from 'react-redux'

const options = [
  'Not at all',
  'Several days',
  'More than half the days in the week',
  'Nearly every day',
];

const Question = ({ prompt, id, dispatch, response }) => (
  <div>
    <p style={{marginLeft: '10px', borderLeft:'4px solid orange', paddingLeft:'20px'}}>{ prompt }</p>
    <hr />
    <ul id="responses">{
      options.map((o, i) =>
        <li
          className={typeof response === 'number' && response === i ? 'selection' : ''}
          onClick={() => {
            // double dispatch is considered an anti-pattern
            dispatch({ type : 'RESPOND', id, selection : i });
            dispatch({ type : 'GO_NEXT' });
          }}
          key={i}>{
          o
        }</li>
      )
    }</ul>
  </div>
)

Question.propTypes = {
  prompt : PropTypes.string.isRequired,
  id : PropTypes.number.isRequired,
  dispatch : PropTypes.func.isRequired,
  response : PropTypes.number,
};

export default connect()(Question)