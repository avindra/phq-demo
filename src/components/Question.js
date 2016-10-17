import React, { PropTypes } from 'react'

const options = [
  'Not at all',
  'Several days',
  'More than half the days in the week',
  'Nearly every day',
];

const Question = ({ prompt }) => (
  <div>
    <p>{ prompt }</p>
    <ul>{ options.map((o, i) => <li key={i}>{ o }</li> ) }</ul>
  </div>
)

Question.propTypes = {
  prompt : PropTypes.string.isRequired,
};

export default Question