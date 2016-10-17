import React, { PropTypes } from 'react'

import { connect } from 'react-redux'

const options = [
  'Not at all',
  'Several days',
  'More than half the days in the week',
  'Nearly every day',
];

const Question = ({ prompt, id, dispatch }) => (
  <div>
    <p style={{marginLeft: '10px'}}>{ prompt }</p>
    <hr />
    <ul id="responses">{ options.map((o, i) => <li onClick={() => dispatch({ type : 'RESPOND', id, selection : i })} key={i}>{ o }</li> ) }</ul>
  </div>
)

Question.propTypes = {
  prompt : PropTypes.string.isRequired,
  id : PropTypes.number.isRequired,
  dispatch : PropTypes.func.isRequired,
};

export default connect()(Question)